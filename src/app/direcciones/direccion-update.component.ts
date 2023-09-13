import { Component } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { DireccionService } from '../servicios/direccion.service';
import { ActivatedRoute } from '@angular/router';
import { Direccion } from '../modelos/direccion';

@Component({
  selector: 'app-direccion-update',
  templateUrl: './direccion-update.component.html',
  styleUrls: ['./direccion-update.component.css']
})
export class DireccionUpdateComponent {
  usuario: Usuario = this.serv.getUserData();
  Direccion: Direccion = new Direccion;
  constructor( 
    private servicio: DireccionService,
    private serv: UsuarioService,
    private route: ActivatedRoute,
     ){}

  ngOnInit(): void {
    this.getDireccionUsuario();
  }
  getDireccionUsuario(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.getDireccion(id).subscribe({
      next: data => {
        this.Direccion = data;
      },
        error: err => {
          console.log('Error al actualizar direccion:', err.error.msg);
        }
    });
  }
  updateDireccionUsuario(){
    this.servicio.modificarDireccion(this.Direccion).subscribe({
      next: data => {
        console.log('Usuario actualizado:', data);
      },
      error: err => {
        console.log('Error al actualizar usuario:', err.error.msg);
      }
    });
  }
}
