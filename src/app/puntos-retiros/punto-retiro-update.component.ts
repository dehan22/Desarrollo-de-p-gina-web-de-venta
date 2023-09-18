import { Component } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { Direccion } from '../modelos/direccion';
import { PuntoRetiro } from '../modelos/puntoRetiro';
import { DireccionService } from '../servicios/direccion.service';
import { UsuarioService } from '../servicios/usuario.service';
import { PuntoRetiroService } from '../servicios/punto-retiro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-punto-retiro-update',
  templateUrl: './punto-retiro-update.component.html',
  styleUrls: ['./punto-retiro-update.component.css']
})
export class PuntoRetiroUpdateComponent {
  Direcciones: Direccion[]=[];
  User: Usuario = this.servUser.getUserData();
  PuntoRetiro: PuntoRetiro = new PuntoRetiro;
  direccionSeleccionada: Direccion = new Direccion;
  constructor(
    private servDirec: DireccionService,
    private servUser: UsuarioService,
    private servicio: PuntoRetiroService,
    private route:ActivatedRoute,
    private ruter: Router,
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
      const id: number = Number(this.route.snapshot.paramMap.get('id'));
      this.servicio.getPunto_retiro(id).subscribe({
        next: data => {
          this.PuntoRetiro = data;
          this.direccionSeleccionada = data.direccion;
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

  modificarPuntoRetiro(){
    this.PuntoRetiro.direccion = this.direccionSeleccionada;
    this.servicio.modificarPunto_retiro(this.PuntoRetiro).subscribe({
      next: data => {
        this.servicioMensaje.mostrarMensaje("El Punto de Retiro se actualizo con exito");
      },
      error: err => {
        this.servicioMensaje.mostrarMensaje("Error:" + err);
      }
    });
  }

}
