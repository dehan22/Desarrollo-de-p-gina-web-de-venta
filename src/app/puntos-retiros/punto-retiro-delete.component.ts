import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PuntoRetiroService } from '../servicios/punto-retiro.service';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-punto-retiro-delete',
  templateUrl: './punto-retiro-delete.component.html',
  styleUrls: ['./punto-retiro-delete.component.css']
})
export class PuntoRetiroDeleteComponent {
  constructor ( 
    private route: ActivatedRoute,
    private servicio: PuntoRetiroService,
    private servicioMensaje: AlertaService,
    private router: Router
    ){
  }
  ngOnInit(): void {
    this.deleteProducto();
  }
    deleteProducto(){
      const id: number = Number(this.route.snapshot.paramMap.get('id'));
      this.servicio.bajaPunto_retiro(id).subscribe({
        next: data => {
        this.servicioMensaje.mostrarMensaje("Punto de Retiro borrado con exito.");
        this.router.navigate(['/puntos_retiro']);
      },
        error: err => {
          this.servicioMensaje.mostrarMensaje("Error al eliminar punto de retiro:" + err.error.msg );
        ;}
      });
    }
}
