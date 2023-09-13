import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-usuario-show',
  templateUrl: './usuario-show.component.html',
  styleUrls: ['./usuario-show.component.css']
})
export class UsuarioShowComponent{
  @Input() usuario?: Usuario;
  User: Usuario = this.servicio.getUserData();
  ok:string="";
  constructor(
    private route: ActivatedRoute,
    private servicio: UsuarioService,
    private location: Location,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getUsuario();
  }
  getUsuario(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (this.User.tipo_usuario === "Administrador"){
      if (this.User.id !== id){
        this.servicio.getUsuario(id).subscribe(usuario => this.usuario = usuario);
        this.ok="verCliente";
      }
    }
    if (this.User.id === id){
        this.ok="verMiPerfil";
    }
    if (this.ok === ''){
      this.router.navigate(['']);
    }
  }
  volverPaginaAnterior(): void {
    this.location.back();
  }
}
