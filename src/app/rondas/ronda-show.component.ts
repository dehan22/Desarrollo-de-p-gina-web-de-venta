import { Component } from '@angular/core';
import { RondaService } from '../servicios/ronda.service';
import { ActivatedRoute } from '@angular/router';
import { Ronda } from '../modelos/ronda';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ronda-show',
  templateUrl: './ronda-show.component.html',
  styleUrls: ['./ronda-show.component.css'],
  providers: [
    DatePipe
  ],
})
export class RondaShowComponent {
  Ronda: Ronda = new Ronda;
  constructor(
    private servicio: RondaService, 
    private route: ActivatedRoute,
    private datePipe: DatePipe){}

  ngOnInit(): void {
    this.getRonda();
  }
  getRonda(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.getRonda(id).subscribe({
      next: ronda => {
        this.Ronda = ronda;
        const fechaInicio = this.datePipe.transform(new Date ( `${ronda.f_inicio[0]}-${ronda.f_inicio[1]}-${ronda.f_inicio[2]} ${ronda.f_inicio[3]}:${ronda.f_inicio[4]}`), 'yyyy-MM-dd HH:mm:ss');
        this.Ronda.f_inicio = String(fechaInicio?.toString());
        const fechaFin = this.datePipe.transform(new Date ( `${ronda.f_fin[0]}-${ronda.f_fin[1]}-${ronda.f_fin[2]} ${ronda.f_fin[3]}:${ronda.f_fin[4]}`), 'yyyy-MM-dd HH:mm:ss');
        this.Ronda.f_fin = String(fechaFin?.toString());
        const fechaRetiroInicio = this.datePipe.transform(new Date ( `${ronda.f_retiro_inicio[0]}-${ronda.f_retiro_inicio[1]}-${ronda.f_retiro_inicio[2]} ${ronda.f_retiro_inicio[3]}:${ronda.f_retiro_inicio[4]}`), 'yyyy-MM-dd HH:mm:ss');
        this.Ronda.f_retiro_inicio = String(fechaRetiroInicio?.toString());
        const fechaRetiroFin = this.datePipe.transform(new Date ( `${ronda.f_retiro_fin[0]}-${ronda.f_retiro_fin[1]}-${ronda.f_retiro_fin[2]} ${ronda.f_retiro_fin[3]}:${ronda.f_retiro_fin[4]}`), 'yyyy-MM-dd HH:mm:ss');
        this.Ronda.f_retiro_fin = String(fechaRetiroFin?.toString());
      }
    });
  }
}
