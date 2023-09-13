import { Component } from '@angular/core';
import { Usuario } from './modelos/usuario';
import { UsuarioService } from './servicios/usuario.service';
import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'El Paseo Te Lo Lleva';
  User: Usuario;
  inSession: boolean = false;
  
  constructor(private servicio: UsuarioService, private servicioMensaje: AlertaService){
    this.User = this.servicio.getUserData();
    const miBooleanStr = sessionStorage.getItem('inSession');
    if (miBooleanStr !== null) {
      this.inSession = JSON.parse(miBooleanStr);
    }
  }
  
  logout (){
    sessionStorage.removeItem('inSession');
    this.servicio.setUserData(new Usuario());
  }
}
