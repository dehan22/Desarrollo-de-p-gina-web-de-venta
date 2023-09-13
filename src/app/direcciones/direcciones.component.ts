import { Component } from '@angular/core';
import { Direccion } from '../modelos/direccion';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelos/usuario';
import { DireccionService } from '../servicios/direccion.service';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.css']
})
export class DireccionesComponent {
  User: Usuario = this.serv.getUserData();
  Direcciones: Direccion[] = [];
  ok: string = "";
    constructor(
      private servicio: DireccionService,
      private serv: UsuarioService,
      private router: Router
    ) {}
    ngOnInit(): void {
      if ((this.User.tipo_usuario === "Cliente") && (this.User.id)){
      this.servicio.getDireccionesCliente(this.User.id).subscribe( direcciones => this.Direcciones = direcciones);
      this.ok = "verMisDirecciones";
      }
      if (this.User.tipo_usuario === "Administrador"){
        this.servicio.getDireccionesPunto().subscribe(direcciones => this.Direcciones = direcciones);
        this.ok = "verDireccionesPunto";
      }
      if (this.ok === ''){
        this.router.navigate(['']);
      }
    }
}
