import { Component } from '@angular/core';
import { Ronda } from '../modelos/ronda';
import { RondaService } from '../servicios/ronda.service';

@Component({
  selector: 'app-rondas',
  templateUrl: './rondas.component.html',
  styleUrls: ['./rondas.component.css']
})
export class RondasComponent {
  rondas: Ronda[] = [];
  deshabilitarBoton: boolean = true;
  constructor( private servicio: RondaService){

  }
  ngOnInit(): void {
    this.servicio.getRondas().subscribe( data => this.rondas = data);
    this.verificarRonda();
  }

  verificarRonda(){
    this.servicio.getRondaActual().subscribe({
      next: data => {
        if(data === null )
          this.deshabilitarBoton = false;
      },
      error: err => {
        this.deshabilitarBoton = true;
      }
    });
  }
}
