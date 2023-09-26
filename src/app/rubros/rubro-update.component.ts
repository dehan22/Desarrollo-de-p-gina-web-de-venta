import { Component } from '@angular/core';
import { Rubro } from '../modelos/rubro';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { RubroService } from '../servicios/rubro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-rubro-update',
  templateUrl: './rubro-update.component.html',
  styleUrls: ['./rubro-update.component.css']
})
export class RubroUpdateComponent {
  Rubro: Rubro = new Rubro;
  Usuario: Usuario = this.servUser.getUserData();
  constructor( 
    private servUser: UsuarioService,
    private servicio: RubroService,
    private router: Router,
    private route: ActivatedRoute,
    private servicioMensaje: AlertaService){
  }
  ngOnInit(): void {
    this.getRubro();
  }
  getRubro(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.getRubro(id).subscribe({
      next: data => {
        this.Rubro = data;
      },
        error: err => {
          console.log('Error al actualizar rubro:', err.error.msg);
        }
    });
  }
  updateRubro(){
    this.servicio.modificarRubro(this.Rubro).subscribe({
      next: data => {
        console.log('Rubro actualizado:', data);
      },
      error: err => {
        console.log('Error al actualizar rubro:', err.error.msg);
      }
    });
    this.router.navigate(['/rubros']);
  }
}
