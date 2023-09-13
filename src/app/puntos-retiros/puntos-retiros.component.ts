import { Component } from '@angular/core';
import { PuntoRetiroService } from '../servicios/punto-retiro.service';
import { PuntoRetiro } from '../modelos/puntoRetiro';

@Component({
  selector: 'app-puntos-retiros',
  templateUrl: './puntos-retiros.component.html',
  styleUrls: ['./puntos-retiros.component.css']
})
export class PuntosRetirosComponent {
  puntos: PuntoRetiro[] = [];
  constructor( private servicio: PuntoRetiroService){}

  ngOnInit(): void {
    this.servicio.getPuntos_retiro().subscribe(puntos => this.puntos = puntos);
  }
}
