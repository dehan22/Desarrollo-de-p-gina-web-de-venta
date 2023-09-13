import { Component } from '@angular/core';
import { PuntoRetiro } from '../modelos/puntoRetiro';
import { PuntoRetiroService } from '../servicios/punto-retiro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-punto-retiro-show',
  templateUrl: './punto-retiro-show.component.html',
  styleUrls: ['./punto-retiro-show.component.css']
})
export class PuntoRetiroShowComponent {
  PuntoRetiro: PuntoRetiro = new PuntoRetiro;
  constructor(
    private servicio: PuntoRetiroService, 
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.getPuntoRetiro();
  }
  getPuntoRetiro(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.getPunto_retiro(id).subscribe(data => this.PuntoRetiro = data);
  }
}
