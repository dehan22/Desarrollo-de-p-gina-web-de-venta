import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RubroService } from '../servicios/rubro.service';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-rubro-delete',
  templateUrl: './rubro-delete.component.html',
  styleUrls: ['./rubro-delete.component.css']
})
export class RubroDeleteComponent {
  constructor ( 
    private route: ActivatedRoute,
    private servicio: RubroService,
    private servicioMensaje: AlertaService,
    private router: Router
    ){
  }
  ngOnInit(): void {
    this.deleteRubro();
  }
    deleteRubro(){
      const id: number = Number(this.route.snapshot.paramMap.get('id'));
      this.servicio.bajaRubro(id).subscribe({
        next: data => {
        this.servicioMensaje.mostrarMensaje("Rubro borrado con exito.");
        this.router.navigate(['/rubros']);
      },
        error: err => {
          this.servicioMensaje.mostrarMensaje("Error al eliminar rubro:" + err.error.msg );
        ;}
      });
    }

}
