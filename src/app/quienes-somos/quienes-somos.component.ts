import { Component, OnInit } from '@angular/core';
import { QuienesSomosService } from '../servicios/quienes-somos.service';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit{
  contenido: string = "";
  nuevoContenido: string = "";
  Usuario: Usuario = this.userservice.getUserData();

  constructor(
    private servicio: QuienesSomosService, 
    private userservice: UsuarioService) {}

  ngOnInit() {
    this.contenido = this.servicio.getContenido();
  }

  actualizarContenido() {
    this.servicio.setContenido(this.nuevoContenido);
    this.contenido = this.nuevoContenido;
  }
}
