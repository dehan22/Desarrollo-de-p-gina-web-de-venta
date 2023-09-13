import { Component } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})

export class UsuarioUpdateComponent {
  usuario: Usuario = new Usuario;
  User: Usuario = this.servUser.getUserData();
  ok: string = "";
  constructor( 
    private route: ActivatedRoute,
    private servicio: UsuarioService,
    private router: Router,
    private servUser: UsuarioService
     ){}

  ngOnInit(): void {
    this.getUsuario();
  }
  getUsuario(): void {    
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (this.User.tipo_usuario === "Administrador"){
      if (this.User.id !== id){
        this.servicio.getUsuario(id).subscribe({
          next: data => { 
            this.usuario = data;
            if (this.usuario.tipo_usuario === "Productor"){
              this.ok="modificarProductor";
            }
            else{
              this.ok="modificarCli-Adm";
            }
          },
          error: err => {
        }
        });
      }
      else{
        if (this.User.id === id){
          this.ok="modificarMiPerfil";
        }
      }
    }
    else{
        if (this.User.id === id){
          this.ok="modificarMiPerfil";
      }else{
        this.router.navigate(['']);
      }
    }
  }
  updateUsuario(){
    if (this.ok === "modificarMiPerfil"){
      this.servicio.modificarUsuario(this.User).subscribe({
        next: response => {console.log('Usuario actualizado:', response);},
        error: err => {console.log('Error al actualizar usuario:', err.error.msg);}
      });
    }else{
      this.servicio.modificarUsuario(this.usuario).subscribe({
        next: response => {console.log('Usuario actualizado:', response);},
        error: err => {console.log('Error al actualizar usuario:', err.error.msg);}
      });
    }
  }
}
