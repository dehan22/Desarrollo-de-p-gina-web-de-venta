import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RondaService } from '../servicios/ronda.service';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-ronda-delete',
  templateUrl: './ronda-delete.component.html',
  styleUrls: ['./ronda-delete.component.css']
})
export class RondaDeleteComponent {
  constructor ( 
    private route: ActivatedRoute,
    private servicio: RondaService,
    private servicioMensaje: AlertaService,
    private router: Router
    ){
  }
  ngOnInit(): void {
    this.deleteRonda();
  }
    deleteRonda(){
      const id: number = Number(this.route.snapshot.paramMap.get('id'));
      this.servicio.bajaRonda(id).subscribe({
        next: data => {
        this.servicioMensaje.mostrarMensaje("Ronda borrada con exito.");
        this.router.navigate(['/rondas']);
      },
        error: err => {
          this.servicioMensaje.mostrarMensaje("Error al eliminar la ronda:" + err.error.msg );
        ;}
      });
    }
}
