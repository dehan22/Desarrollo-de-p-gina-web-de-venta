import { Component } from '@angular/core';
import { Ronda } from '../modelos/ronda';
import { RondaService } from '../servicios/ronda.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-rondas',
  templateUrl: './rondas.component.html',
  styleUrls: ['./rondas.component.css'],
  providers: [
    DatePipe
  ],
})
export class RondasComponent {
  rondas: Ronda[] = [];
  deshabilitarBoton: boolean = true;
  constructor( private servicio: RondaService,
    private datePipe: DatePipe){

  }
  ngOnInit(): void {
    this.servicio.getRondas().subscribe( data => this.rondas = data);
    this.servicio.getRondas().subscribe({
      next: rondas => {
        this.rondas = rondas;
        this.formatoFechas();
      }
    });
    this.verificarRonda();
  }

  formatoFechas(){
    console.log("Entro aqui.")
    this.rondas.forEach((value) => {
      const fechaInicio = this.datePipe.transform(new Date ( `${value.f_inicio[0]}-${value.f_inicio[1]}-${value.f_inicio[2]} ${value.f_inicio[3]}:${value.f_inicio[4]}`), 'yyyy-MM-dd HH:mm:ss');
      value.f_inicio = String(fechaInicio?.toString());
      const fechaFin = this.datePipe.transform(new Date ( `${value.f_fin[0]}-${value.f_fin[1]}-${value.f_fin[2]} ${value.f_fin[3]}:${value.f_fin[4]}`), 'yyyy-MM-dd HH:mm:ss');
      value.f_fin = String(fechaFin?.toString());
      const fechaRetiroInicio = this.datePipe.transform(new Date ( `${value.f_retiro_inicio[0]}-${value.f_retiro_inicio[1]}-${value.f_retiro_inicio[2]} ${value.f_retiro_inicio[3]}:${value.f_retiro_inicio[4]}`), 'yyyy-MM-dd HH:mm:ss');
      value.f_retiro_inicio = String(fechaRetiroInicio?.toString());
      const fechaRetiroFin = this.datePipe.transform(new Date ( `${value.f_retiro_fin[0]}-${value.f_retiro_fin[1]}-${value.f_retiro_fin[2]} ${value.f_retiro_fin[3]}:${value.f_retiro_fin[4]}`), 'yyyy-MM-dd HH:mm:ss');
      value.f_retiro_fin = String(fechaRetiroFin?.toString());
    });
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
