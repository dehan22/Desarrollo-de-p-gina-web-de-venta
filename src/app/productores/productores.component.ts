import { Component } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-productores',
  templateUrl: './productores.component.html',
  styleUrls: ['./productores.component.css']
})
export class ProductoresComponent {
  productores: Usuario[] = [];
  constructor( private servicio: UsuarioService){

  }
  ngOnInit(): void {
    this.servicio.getProductores().subscribe( productores => this.productores = productores);
  }
}
