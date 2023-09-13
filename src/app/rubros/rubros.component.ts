import { Component } from '@angular/core';
import { Rubro } from '../modelos/rubro';
import { RubroService } from '../servicios/rubro.service';

@Component({
  selector: 'app-rubros',
  templateUrl: './rubros.component.html',
  styleUrls: ['./rubros.component.css']
})
export class RubrosComponent {
  rubros: Rubro[] = [];
  constructor( private servicio: RubroService){

  }
  ngOnInit(): void {
    this.servicio.getRubros().subscribe( rubros => this.rubros = rubros);
  }
}
