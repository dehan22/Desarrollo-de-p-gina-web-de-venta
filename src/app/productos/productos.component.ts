import { Component } from '@angular/core';
import { Producto } from '../modelos/producto';
import { ProductoService } from '../servicios/producto.service';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Usuario: Usuario = this.servUser.getUserData();
  productos: Producto[] = [];
  constructor( 
    private servicio: ProductoService,
    private servUser: UsuarioService){}

  ngOnInit(): void {
    this.servicio.getProductos().subscribe(productos => this.productos = productos);
  }
}
