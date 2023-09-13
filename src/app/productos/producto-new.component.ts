import { Component } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Router } from '@angular/router';
import { AlertaService } from '../alerta.service';
import { Producto } from '../modelos/producto';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { Rubro } from '../modelos/rubro';
import { RubroService } from '../servicios/rubro.service';

@Component({
  selector: 'app-producto-new',
  templateUrl: './producto-new.component.html',
  styleUrls: ['./producto-new.component.css']
})
export class ProductoNewComponent {
  nuevoProducto: Producto = new Producto;
  rubros: Rubro[] = [];
  productores: Usuario [] = [];
  rubroSeleccionado = new Rubro;
  productorSeleccionado = new Usuario;
  constructor( 
    private servicio: ProductoService,
    private servUser: UsuarioService,
    private servRubro: RubroService,
    private router: Router,
    private servicioMensaje: AlertaService){
  }

  ngOnInit(){
    this.servRubro.getRubros().subscribe({
      next: data => {
        this.rubros = data;
      },
      error: err => {
        this.servicioMensaje.mostrarMensaje("Error:" + err);
      }
    });
    this.servUser.getProductores().subscribe({
      next: data => {
        this.productores = data;
      },
      error: err => {
        this.servicioMensaje.mostrarMensaje("Error:" + err);
      }
    });
  }

  rubroSeleccion(valor:Rubro): void {
		this.rubroSeleccionado = valor;
	}

  productorSeleccion(valor:Usuario): void {
		this.productorSeleccionado = valor;
	}

  cargarProducto(){
    console.log(this.productorSeleccionado.nombre);
    this.nuevoProducto.productor = this.productorSeleccionado;
    console.log(this.rubroSeleccionado.nombre);
    this.nuevoProducto.rubro = this.rubroSeleccionado;
    this.servicio.altaProducto(this.nuevoProducto).subscribe({
        next: data => {
          this.servicioMensaje.mostrarMensaje("Producto creado con exito");
          this.router.navigate(['/producto',data.id]);
        },
        error: err => {
          this.servicioMensaje.mostrarMensaje("Error:" + err);
        }
      });

    }

  }
