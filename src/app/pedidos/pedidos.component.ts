import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { Pedido } from 'src/app/modelos/pedido';
import { ItemProductoService } from '../servicios/item-producto.service';
import { ItemProducto } from '../modelos/ItemProducto';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  items: ItemProducto[] = [];

  pedidos: Pedido[] = [];
  constructor( private servicio: PedidoService,
    private servItem: ItemProductoService){

  }
  ngOnInit(): void {
    this.servicio.getPedidos().subscribe( pedidos => {this.pedidos = pedidos, 
      this.pedidos.forEach((value)  => {
        this.servItem.getItems(Number(value.id)).subscribe( items => {this.items = items,
          value.productos = this.items;
        });
      })
    });
  }

}
