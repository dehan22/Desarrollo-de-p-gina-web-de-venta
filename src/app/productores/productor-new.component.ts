import { Component } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { Router } from '@angular/router';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-productor-new',
  templateUrl: './productor-new.component.html',
  styleUrls: ['./productor-new.component.css']
})
export class ProductorNewComponent {
  nuevoProductor: Usuario = new Usuario;
  constructor( 
    private servicio: UsuarioService,
    private router: Router,
    private servicioMensaje: AlertaService){
  }

  cargarProductor(){
    this.nuevoProductor.tipo_usuario = "Productor";
    this.servicio.altaUsuario(this.nuevoProductor).subscribe({
        next: data => {
          this.servicioMensaje.mostrarMensaje("Productor creado con exito");
          this.router.navigate(['/perfil',data.id]);
        },
        error: err => {
          this.servicioMensaje.mostrarMensaje("Error:" + err);
        }
      });

    }
}
