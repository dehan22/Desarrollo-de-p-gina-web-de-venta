import { Component } from '@angular/core';
import { RondaService } from '../servicios/ronda.service';
import { ActivatedRoute } from '@angular/router';
import { Ronda } from '../modelos/ronda';

@Component({
  selector: 'app-ronda-show',
  templateUrl: './ronda-show.component.html',
  styleUrls: ['./ronda-show.component.css']
})
export class RondaShowComponent {
  Ronda: Ronda = new Ronda;
  constructor(
    private servicio: RondaService, 
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getRonda();
  }
  getRonda(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.getRonda(id).subscribe(ronda => this.Ronda = ronda);
  }
}
