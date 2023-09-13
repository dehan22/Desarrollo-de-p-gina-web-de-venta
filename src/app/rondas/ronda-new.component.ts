import { Component } from '@angular/core';
import { Ronda } from '../modelos/ronda';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { RondaService } from '../servicios/ronda.service';
import { Router } from '@angular/router';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-ronda-new',
  templateUrl: './ronda-new.component.html',
  styleUrls: ['./ronda-new.component.css']
})
export class RondaNewComponent {
  nuevaRonda: Ronda = new Ronda;
  Usuario: Usuario = this.servUser.getUserData();

  constructor( 
    private servUser: UsuarioService,
    private servicio: RondaService,
    private router: Router,
    private servicioMensaje: AlertaService){
  }

  cargarRonda(){
    if (this.Usuario.tipo_usuario === "Administrador"){
      this.servicio.altaRonda(this.nuevaRonda).subscribe({
          next: data => {
            this.servicioMensaje.mostrarMensaje("Ronda creado con exito");
            this.router.navigate(['/ronda',data.id]);
          },
          error: err => {
            this.servicioMensaje.mostrarMensaje("Error:" + err);
          }
      });
      this.servicioMensaje.mostrarMensaje(String(this.nuevaRonda.f_inicio));
      this.servicioMensaje.mostrarMensaje(String(this.nuevaRonda.f_fin));
    }
  }
}
