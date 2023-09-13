import { Component } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent {
  constructor ( 
    private route: ActivatedRoute,
    private servicio: UsuarioService,
    private router: Router
    ){
  }
  ngOnInit(): void {
    this.deleteUsuario();
  }
    deleteUsuario(){
      const id: number = Number(this.route.snapshot.paramMap.get('id'));
      this.servicio.bajaUsuario(id).subscribe({
        next: response => {console.log('Usuario eliminado:', response), this.router.navigate(['/usuarios']);},
        error: err => {console.log('Error al eliminar usuario:', err.error.msg);}
      });
    }

}
