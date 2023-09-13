import { Component } from '@angular/core';
import { Direccion } from '../modelos/direccion';
import { DireccionService } from '../servicios/direccion.service';
import { Router } from '@angular/router';
import { AlertaService } from '../alerta.service';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-direccion-new',
  templateUrl: './direccion-new.component.html',
  styleUrls: ['./direccion-new.component.css']
})
export class DireccionNewComponent {
  Direccion: Direccion = new Direccion;
  User: Usuario = this.serv.getUserData();
  constructor( 
    private servicio: DireccionService,
    private router: Router,
    private servicioMensaje: AlertaService,
    private serv: UsuarioService
    ){}

  cargarDireccion(){
    if (this.User.tipo_usuario === "Cliente"){
    this.Direccion.usuario = this.User;
    this.servicio.altaDireccion(this.Direccion).subscribe({
        next: data => {
          this.servicioMensaje.mostrarMensaje("La direccion fue creada con exito.");
          this.router.navigate(['/direcciones']);
        },
        error: err => {
          this.servicioMensaje.mostrarMensaje("Error:" + err);
        }
      });
    }
    if (this.User.tipo_usuario === "Administrador"){
      this.servicio.altaDireccion(this.Direccion).subscribe({
        next: data => {
          this.servicioMensaje.mostrarMensaje("La direccion fue creada con exito.");
          this.router.navigate(['/direccion',data.id]);
        },
        error: err => {
          this.servicioMensaje.mostrarMensaje("Error:" + err);
        }
      });
    }
    if (this.User.tipo_usuario === "Invitado"){
      this.router.navigate(['/']);
    }
  }
}
