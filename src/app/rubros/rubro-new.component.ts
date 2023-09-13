import { Component } from '@angular/core';
import { Rubro } from '../modelos/rubro';
import { RubroService } from '../servicios/rubro.service';
import { Router } from '@angular/router';
import { AlertaService } from '../alerta.service';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-rubro-new',
  templateUrl: './rubro-new.component.html',
  styleUrls: ['./rubro-new.component.css']
})
export class RubroNewComponent {
  nuevoRubro: Rubro = new Rubro;
  Usuario: Usuario = this.servUser.getUserData();
  constructor( 
    private servUser: UsuarioService,
    private servicio: RubroService,
    private router: Router,
    private servicioMensaje: AlertaService){
  }

  cargarRubro(){
    if (this.Usuario.tipo_usuario === "Administrador"){
      this.servicio.altaRubro(this.nuevoRubro).subscribe({
          next: data => {
            this.servicioMensaje.mostrarMensaje("Rubro creado con exito");
            this.router.navigate(['/rubro',data.id]);
          },
          error: err => {
            this.servicioMensaje.mostrarMensaje("Error:" + err);
          }
      });
    }
  }
}
