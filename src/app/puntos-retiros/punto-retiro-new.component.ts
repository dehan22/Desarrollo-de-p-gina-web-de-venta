import { Component } from '@angular/core';
import { Direccion } from '../modelos/direccion';
import { DireccionService } from '../servicios/direccion.service';
import { PuntoRetiroService } from '../servicios/punto-retiro.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelos/usuario';
import { AlertaService } from '../alerta.service';
import { PuntoRetiro } from '../modelos/puntoRetiro';

@Component({
  selector: 'app-punto-retiro-new',
  templateUrl: './punto-retiro-new.component.html',
  styleUrls: ['./punto-retiro-new.component.css']
})
export class PuntoRetiroNewComponent {
  Direcciones: Direccion[]=[];
  User: Usuario = this.servUser.getUserData();
  PuntoRetiro: PuntoRetiro = new PuntoRetiro;
  direccionSeleccionada: Direccion = new Direccion;
  constructor(
    private servDirec: DireccionService,
    private servUser: UsuarioService,
    private servicio: PuntoRetiroService,
    private router: Router, 
    private servicioMensaje: AlertaService  
  ){}
  ngOnInit(){
    if (this.User.tipo_usuario === "Administrador"){
      this.servDirec.getDireccionesPunto().subscribe({
        next: data => {
          this.Direcciones = data;
        },
        error: err => {
          this.servicioMensaje.mostrarMensaje("Error:" + err);
        }
      });  
    }
  }
  direccionSeleccion(valor:Direccion): void {
		this.direccionSeleccionada = valor;
	}

  cargarPuntoRetiro(){
    this.PuntoRetiro.direccion = this.direccionSeleccionada;
    this.servicio.altaPunto_retiro(this.PuntoRetiro).subscribe({
      next: data => {
        this.servicioMensaje.mostrarMensaje("El Punto de Retiro se cargo con exito");
        this.router.navigate(['/punto_retiro',data.id]);
      },
      error: err => {
        this.servicioMensaje.mostrarMensaje("Error:" + err);
      }
    });
  }
}
