import { Component } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Usuario: Usuario = this.servicio.getUserData();
  constructor(private servicio: UsuarioService) {
  }
  tipoUsuario: string = this.Usuario.tipo_usuario;
}
