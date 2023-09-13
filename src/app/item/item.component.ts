import { Component, EventEmitter, Input, Output, numberAttribute } from '@angular/core';
import { ItemProducto } from '../modelos/ItemProducto';
import { ItemProductoService } from '../servicios/item-producto.service';
import { ActivatedRoute } from '@angular/router';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  item: ItemProducto = new ItemProducto;
  @Input({ transform: numberAttribute }) id: number = 0; 
  @Output() actualizarPrecioTotal = new EventEmitter<number>(); 
  @Output() productoEliminado = new EventEmitter<number>();
  precio_total: number = 0
  constructor(
    private servicio: ItemProductoService,
    private servicioMensaje: AlertaService, 
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getItem();
  }
  getItem(): void {
    this.servicio.getItemProduto(this.id).subscribe({
      next: data => {
        this.item = data;
        this.precio_total = this.item.cantidad * this.item.producto.precio_unitario;
        this.actualizarPrecioTotal.emit(this.precio_total);
      },
      error: err => {
        this.servicioMensaje.mostrarMensaje("Error:" + err);
      }
    });
  }
  actualizarPrecio(nuevaCantidad: number): void{
    this.precio_total = this.item.producto.precio_unitario * nuevaCantidad;
    this.actualizarPrecioTotal.emit(this.precio_total);
  }
  eliminar(){
    this.servicio.bajaItemProducto(Number(this.item.id)).subscribe();
    this.productoEliminado.emit(this.item.id);
  }
  ngOnDestroy(){
    if (this.item.enable === true){
      this.item.precio_total = this.precio_total;
      this.servicio.modificarItemProducto(this.item).subscribe({
        next: data => {

        },
        error: err => {

        }
      });
    }
  }
}
