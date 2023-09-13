import { Component } from '@angular/core';
import { Producto } from '../modelos/producto';
import { Rubro } from '../modelos/rubro';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { ProductoService } from '../servicios/producto.service';
import { RubroService } from '../servicios/rubro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-producto-update',
  templateUrl: './producto-update.component.html',
  styleUrls: ['./producto-update.component.css']
})
export class ProductoUpdateComponent {
  User: Usuario = this.servUser.getUserData();
  Producto: Producto = new Producto;
  rubros: Rubro[] = [];
  productores: Usuario [] = [];
  constructor(
    private route: ActivatedRoute,
    private servicio: ProductoService,
    private servUser: UsuarioService,
    private servRubro: RubroService,
    private router: Router,
    private servicioMensaje: AlertaService
    ){}
  ngOnInit(){
    if (this.User.tipo_usuario === "Administrador"){
      this.servRubro.getRubros().subscribe({
        next: data => {
          this.rubros = data;
        },
        error: err => {
          this.servicioMensaje.mostrarMensaje("Error:" + err);
        }
      });
      this.servUser.getUsuarios().subscribe({
        next: data => {
          this.productores = data;
        },
        error: err => {
          this.servicioMensaje.mostrarMensaje("Error:" + err);
        }
      });
      this.getProducto();
    }
  }
  getProducto(): void {
      const id: number = Number(this.route.snapshot.paramMap.get('id'));
      this.servicio.getProducto(id).subscribe({
        next: data => {
          this.Producto = data;
        },
          error: err => {
            console.log('Error al actualizar Producto:', err.error.msg);
          }
      });
    }
  modificarProducto(){
    this.servicio.modificarProducto(this.Producto).subscribe({
      next: data => {
        this.servicioMensaje.mostrarMensaje("El Producto se actualizo con exito");
      },
      error: err => {
        this.servicioMensaje.mostrarMensaje("Error:" + err);
      }
    });
  }
}
