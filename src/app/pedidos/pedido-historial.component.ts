import { Component } from '@angular/core';
import { Pedido } from '../modelos/pedido';
import { PedidoService } from '../servicios/pedido.service';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelos/usuario';
import { ItemProductoService } from '../servicios/item-producto.service';
import { ItemProducto } from '../modelos/ItemProducto';

@Component({
  selector: 'app-pedido-historial',
  templateUrl: './pedido-historial.component.html',
  styleUrls: ['./pedido-historial.component.css']
})
export class PedidoHistorialComponent {
  pedidos: Pedido[] = [];
  items: ItemProducto[] = [];
  usuario: Usuario = this.servUser.getUserData();
  constructor( 
    private servicio: PedidoService,
    private servUser: UsuarioService,
    private servItem: ItemProductoService){}

  ngOnInit(): void {
    if (this.usuario.id !== undefined){
      this.servicio.getCompras(this.usuario.id).subscribe( pedidos => {this.pedidos = pedidos, 
        this.pedidos.forEach((value)  => {
          this.servItem.getItems(Number(value.id)).subscribe( items => {this.items = items,
            value.productos = this.items;
          });
        })
      });
    }
  }
}
