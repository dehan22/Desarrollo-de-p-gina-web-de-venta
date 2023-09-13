import { Component } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { Ronda } from '../modelos/ronda';
import { RondaService } from '../servicios/ronda.service';
import { UsuarioService } from '../servicios/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ronda-update',
  templateUrl: './ronda-update.component.html',
  styleUrls: ['./ronda-update.component.css']
})
export class RondaUpdateComponent {
  Usuario: Usuario = this.serv.getUserData();
  Ronda: Ronda = new Ronda;
  constructor( 
    private servicio: RondaService,
    private serv: UsuarioService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.getRonda();
  }
  getRonda(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.getRonda(id).subscribe({
      next: data => {
        this.Ronda = data;
      },
        error: err => {
          console.log('Error al actualizar la ronda:', err.error.msg);
        }
    });
  }
  updateRonda(){
    this.servicio.modificarRonda(this.Ronda).subscribe({
      next: data => {
        console.log('Ronda actualizada:', data);
        this.router.navigate(['']);
      },
      error: err => {
        console.log('Error al actualizar la ronda:', err.error.msg);
      }
    });
  }
}
