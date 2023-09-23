import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from 'src/app/modelos/pedido';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { Usuario } from '../modelos/usuario';
import { Direccion } from '../modelos/direccion';
import { DireccionService } from '../servicios/direccion.service';
import { PuntoRetiroService } from '../servicios/punto-retiro.service';
import { PuntoRetiro } from '../modelos/puntoRetiro';
import { Ronda } from '../modelos/ronda';
import { RondaService } from '../servicios/ronda.service';
import { ItemProductoService } from '../servicios/item-producto.service';
import { ItemProducto } from '../modelos/ItemProducto';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-pedido-confirmar',
  templateUrl: './pedido-confirmar.component.html',
  styleUrls: ['./pedido-confirmar.component.css']
})
export class PedidoConfirmarComponent {
  pedido: Pedido = new Pedido;
  tipoEntrega ='';
  usuario: Usuario = new Usuario;
  direccionEntrega: Direccion = new Direccion;
  puntoRetiro: PuntoRetiro = new PuntoRetiro;
  direcciones: Direccion[] = [];
  puntos: PuntoRetiro[] = [];
  fechas: Date[] = [];
  items: ItemProducto[] = [];
  rondaActual: Ronda = new Ronda;
  fechaEntrega: Date = new Date;
  precio_total_pedido: number = 0;
  constructor( private servicio: PedidoService,
    private servicioDireccion: DireccionService,
    private servicioPunto: PuntoRetiroService,
    private servicioRonda: RondaService,
    private servItem: ItemProductoService,
    private servProducto: ProductoService, 
    private route: ActivatedRoute,
    private router: Router
     ){
  }
  
  ngOnInit(): void {
    this.getPedido();
    this.fechas.push(this.proximoDia(5)); 
    this.fechas.push(this.proximoDia(6));
    this.servicioRonda.getRondaActual().subscribe(ronda => this.rondaActual = ronda);
  }
  getPedido(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.servicio.getPedido(id)
      .subscribe(pedido => this.pedido = pedido);
      this.servItem.getItems(Number(id)).subscribe( items => {this.items = items});
  }

  colocarPrecio(): void{
    this.items.forEach((value) => {
      this.precio_total_pedido += value.precio_total;
    });
    this.pedido.preciototal = this.precio_total_pedido;
  }

  onSelected(value:string): void {
		this.tipoEntrega = value;
    this.getDirecciones();
	}

  fechaSeleccionada(value:Date): void {
		this.fechaEntrega = value;
	}

  getDirecciones(): void{
    if (this.tipoEntrega === "Domicilio"){
      this.servicioDireccion.getDireccionesCliente(Number(this.pedido.usuario!.id)).subscribe(direcciones => this.direcciones = direcciones);
    }
    else{
      this.servicioPunto.getPuntos_retiro().subscribe(puntos => this.puntos = puntos);
    }
  }

  //Devuelve el proximo dia 
 proximoDia(dia:number) {
  var proximo = new Date();
  proximo.setDate(proximo.getDate() + (dia - 1 - proximo.getDay() + 7) % 7 + 1);
  return proximo;
}


  confirmarPedido(){
    this.checkStock();
    this.colocarPrecio();
    this.pedido.confirmado = true;
    this.pedido.forma_entrega = this.tipoEntrega;
    this.pedido.ronda = this.rondaActual;
    if (this.tipoEntrega === "Domicilio"){
      this.pedido.direccion = this.direccionEntrega;
    }
    else
      this.pedido.direccion = this.puntoRetiro.direccion;
      this.servicio.modificarPedido(this.pedido).subscribe({
      next: response => {console.log('Pedido confirmado:', response), this.router.navigate(['']);},
      error: err => {console.log('Error al confirmar pedido:', err.error);}
    });
  }

  checkStock(){
    this.items.forEach((value) => {
      if (value.producto.stock <= value.cantidad){
        value.cantidad = value.producto.stock;
        value.precio_total = value.producto.precio_unitario * value.cantidad;
        value.producto.stock = 0;
      }
      else{
        value.producto.stock = value.producto.stock - value.cantidad;
      }
      this.servProducto.modificarProducto(value.producto).subscribe({
        next: response => {console.log('Se modifico el producto confirmado:', response);},
        error: err => {console.log('Error al modificar producto:', err.error);}
      });
    })
    this.pedido.productos = this.items;
  }
}
