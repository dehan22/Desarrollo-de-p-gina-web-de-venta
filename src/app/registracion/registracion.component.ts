import { Component } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelos/usuario';
import { Router } from '@angular/router';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-registracion',
  templateUrl: './registracion.component.html',
  styleUrls: ['./registracion.component.css']
})
export class RegistracionComponent{
  nuevoUsuario: Usuario = this.servicio.getUserData();
  inSession: boolean = false;
  constructor( private servicio: UsuarioService, private router: Router , private servicioMensaje: AlertaService){
  }
  registrarUsuario(){
    this.nuevoUsuario.tipo_usuario="Cliente";
    this.servicio.altaUsuario(this.nuevoUsuario).subscribe({
      next: data => {
        this.servicioMensaje.mostrarMensaje("Bienvenido:" + data.nombre);
        this.servicio.setUserData(data);
        this.inSession = true;
        sessionStorage.setItem('inSession', JSON.stringify(true));
        window.location.href = '';
      },
      error: err => {
        this.servicioMensaje.mostrarMensaje("Error:" + err);
      }
    });   
  }
  
}
