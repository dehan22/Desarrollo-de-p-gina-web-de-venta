import { Component } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { AlertaService } from '../alerta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {
  Usuario: Usuario = this.servicio.getUserData();
  email: string = "";
  clave: string = "";
  inSession: boolean = false;
  constructor( private servicio: UsuarioService, private servicioMensaje:AlertaService, private router: Router)
  {}

  session(){
      //consultar si usurio con email y clave existe
    this.servicio.login(this.email, this.clave).subscribe({
      next: data => {
        this.servicioMensaje.mostrarMensaje("Bienvenido:" + data.nombre);
        this.Usuario = data;
        this.servicio.setUserData(this.Usuario);
        this.inSession = true;
        sessionStorage.setItem('inSession', JSON.stringify(true));
        window.location.href = '';
      },
      error: err => {
       
      }
    });
  }    
}
