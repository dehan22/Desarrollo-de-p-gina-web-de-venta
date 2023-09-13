import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from '../modelos/pedido';
import { PedidoService } from '../servicios/pedido.service';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelos/usuario';
import { ItemProducto } from '../modelos/ItemProducto';
import { ItemProductoService } from '../servicios/item-producto.service';
import { AlertaService } from '../alerta.service';
import { RondaService } from '../servicios/ronda.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  providers: [
    DatePipe
  ],
})
export class CarritoComponent implements OnInit{
  Usuario: Usuario = this.servUser.getUserData();
  pedido?: Pedido;
  items: ItemProducto[] = [];
  precio_total_pedido: number = 0;
  preciosIndividuales: { [key: string]: number } = {};
  deshabilitarBoton: boolean = false;

  constructor(
    private servicioMensaje: AlertaService,
    private route: ActivatedRoute, 
    private servItemP: ItemProductoService,
    private servicio: PedidoService,
    private servUser: UsuarioService,
    private servRonda: RondaService,
    private router: Router,
    private datePipe: DatePipe)
  {}

  ngOnInit(): void {
    this.verificarRonda();
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if ((this.Usuario.id === id) && (this.Usuario.tipo_usuario === "Cliente") ){
      this.servicio.getCarrito(this.Usuario.id).subscribe({
        next: data => {
          this.pedido = data;
          if (this.pedido.id !== undefined){
            this.servItemP.getItems(this.pedido.id).subscribe(data =>this.items = data);
          }
        },
        error: err => {
          this.servicioMensaje.mostrarMensaje("No tienes carrito aun:" + err);
        }
      });
    }
    else{
      this.router.navigate(['']);
    }
  }
  verificarRonda(){
    this.servRonda.getRondaActual().subscribe({
      next: data => {
        if(data === null )
          this.deshabilitarBoton = true;
        else{
          const fechaActual = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
          const fechaInicio = this.datePipe.transform(new Date ( `${data.f_inicio[0]}-${data.f_inicio[1]}-${data.f_inicio[2]} ${data.f_inicio[3]}:${data.f_inicio[4]}`), 'yyyy-MM-dd HH:mm:ss');
          const fechaFin = this.datePipe.transform(new Date ( `${data.f_fin[0]}-${data.f_fin[1]}-${data.f_fin[2]} ${data.f_fin[3]}:${data.f_fin[4]}`), 'yyyy-MM-dd HH:mm:ss');
          if (String(fechaInicio?.toString()) > String(fechaActual?.toString()) || String(fechaFin?.toString()) < String(fechaActual?.toString())){
            this.deshabilitarBoton = true;
          }
        }
      },
      error: err => {
        this.deshabilitarBoton = true;
      }
    });
  }

  actualizaPrecioTotal(precio_producto:number, itemid:number){
    this.preciosIndividuales[itemid] = precio_producto;
    this.precio_total_pedido = Object.values(this.preciosIndividuales).reduce((total, precio) => total + precio, 0);
  }
  eliminarProducto(ipId: number) {
      this.items = this.items.filter(itemP => itemP.id !== ipId);
      delete this.preciosIndividuales[ipId];
      this.precio_total_pedido = Object.values(this.preciosIndividuales).reduce((total, precio) => total + precio, 0);
  }
  ngOnDestroy(){
    if (this.pedido !== undefined){
      this.pedido.preciototal = this.precio_total_pedido;
      this.servicio.altaPedido(this.pedido).subscribe({
        next: data => {

        },
        error: err => {

        }
      });
    }
  }
}
