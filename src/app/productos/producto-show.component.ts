import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Producto } from '../modelos/producto';
import { ProductoService } from '../servicios/producto.service';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { ItemProducto } from '../modelos/ItemProducto';
import { ItemProductoService } from '../servicios/item-producto.service';
import { PedidoService } from '../servicios/pedido.service';
import { Pedido } from '../modelos/pedido';
import { RondaService } from '../servicios/ronda.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-producto-show',
  templateUrl: './producto-show.component.html',
  styleUrls: ['./producto-show.component.css'],
  providers: [
    DatePipe
  ],
})
export class ProductoShowComponent {
  User: Usuario = this.serv.getUserData();
  producto: Producto = new Producto;
  ItemProducto: ItemProducto = new ItemProducto;
  pedido: Pedido = new Pedido;
  id: number = 0;
  deshabilitarCompra: boolean = false;
  constructor(
    private servicio: ProductoService, 
    private servItemP: ItemProductoService,
    private servPedido: PedidoService,
    private route: ActivatedRoute,
    private serv: UsuarioService,
    private servRonda: RondaService,
    private router: Router,
    private datePipe: DatePipe
    ){}

  ngOnInit(): void {
    this.getProducto();
    this.verificarRonda();
  }
  getProducto(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.getProducto(id).subscribe(producto => this.producto = producto);
  }

  verificarRonda(){
    this.servRonda.getRondaActual().subscribe({
      next: data => {
        if(data === null )
          this.deshabilitarCompra = true;
        else{
          const fechaActual = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
          const fechaInicio = this.datePipe.transform(new Date ( `${data.f_inicio[0]}-${data.f_inicio[1]}-${data.f_inicio[2]} ${data.f_inicio[3]}:${data.f_inicio[4]}`), 'yyyy-MM-dd HH:mm:ss');
          const fechaFin = this.datePipe.transform(new Date ( `${data.f_fin[0]}-${data.f_fin[1]}-${data.f_fin[2]} ${data.f_fin[3]}:${data.f_fin[4]}`), 'yyyy-MM-dd HH:mm:ss');
          if (String(fechaInicio?.toString()) > String(fechaActual?.toString()) || String(fechaFin?.toString()) < String(fechaActual?.toString())){
            this.deshabilitarCompra = true;
          }
        }
      },
      error: err => {
        this.deshabilitarCompra = true;
      }
    });
  }
  agregarCarrito(){
    this.ItemProducto.producto = this.producto;
    this.ItemProducto.cantidad = 1;
    if (this.User.id !== undefined){
      this.servPedido.getCarrito(this.User.id).subscribe({
        next: data => {
            this.ItemProducto.pedido = data;
            this.servItemP.altaItemProducto(this.ItemProducto).subscribe({
              next: data => {
                this.router.navigate(['/carrito',this.User.id]);
              }});
        },
        error: err => {
          this.pedido.usuario = this.User;
          this.servPedido.altaPedido(this.pedido).subscribe({
            next: data => {
              this.ItemProducto.pedido = data;
              this.servItemP.altaItemProducto(this.ItemProducto).subscribe({
                next: data => {
                  this.router.navigate(['/carrito',this.User.id]);
                }});
            }}); 
        }
      });
    }
  }  
}