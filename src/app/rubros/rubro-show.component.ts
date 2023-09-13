import { Component } from '@angular/core';
import { Rubro } from '../modelos/rubro';
import { RubroService } from '../servicios/rubro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rubro-show',
  templateUrl: './rubro-show.component.html',
  styleUrls: ['./rubro-show.component.css']
})
export class RubroShowComponent {
  Rubro: Rubro = new Rubro;
  constructor(
    private servicio: RubroService, 
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getProducto();
  }
  getProducto(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.getRubro(id).subscribe(rubro => this.Rubro = rubro);
  }
}
