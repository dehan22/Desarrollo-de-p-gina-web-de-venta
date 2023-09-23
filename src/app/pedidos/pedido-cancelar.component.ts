import { Component } from '@angular/core';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertaService } from 'src/app/alerta.service';
import { ItemProductoService } from '../servicios/item-producto.service';
import { ProductoService } from '../servicios/producto.service';
import { ItemProducto } from '../modelos/ItemProducto';

@Component({
  selector: 'app-cancelar-pedido',
  templateUrl: './pedido-cancelar.component.html',
  styleUrls: ['./pedido-cancelar.component.css'],
  providers: [PedidoService, AlertaService, Router],
})
export class PedidoCancelarComponent {
  items: ItemProducto[] = [];
  constructor(
    private route: ActivatedRoute,
    private servicio: PedidoService,
    private servItem: ItemProductoService,
    private servProducto: ProductoService,
    private router: Router,
    private servicioMensaje: AlertaService
  )
  {}

  ngOnInit(): void {
    this.cancelPedido();
  }

  cancelPedido(){
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.servItem.getItems(Number(id)).subscribe( items => {this.items = items});
    this.servicio.bajaPedido(id).subscribe({
      next: response => {this.servicioMensaje.mostrarMensaje("Pedido cancelado."), this.agregarStock(), this.router.navigateByUrl('/pedidos');},
      error: err => {this.servicioMensaje.mostrarMensaje("Error al cancelar pedido:" + err.error);}
    });
  }

  agregarStock(){
    this.items.forEach((value) => {  
      value.producto.stock = value.producto.stock + value.cantidad;
      this.servProducto.modificarProducto(value.producto).subscribe({
        next: response => {console.log('Se modifico el producto confirmado:', response);},
        error: err => {console.log('Error al modificar producto:', err.error);}
      });
    })
  }
}
