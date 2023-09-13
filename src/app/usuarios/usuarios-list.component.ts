import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

  usuarios: Usuario[] = [];
  constructor( private servicio: UsuarioService){

  }
  ngOnInit(): void {
    this.servicio.getUsuarios().subscribe( usuarios => this.usuarios = usuarios);
  }
}
