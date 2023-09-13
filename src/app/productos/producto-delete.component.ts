import { Component } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-producto-delete',
  templateUrl: './producto-delete.component.html',
  styleUrls: ['./producto-delete.component.css']
})
export class ProductoDeleteComponent {
  constructor ( 
    private route: ActivatedRoute,
    private servicio: ProductoService,
    private servicioMensaje: AlertaService,
    private router: Router
    ){
  }
  ngOnInit(): void {
    this.deleteProducto();
  }
    deleteProducto(){
      const id: number = Number(this.route.snapshot.paramMap.get('id'));
      this.servicio.bajaProducto(id).subscribe({
        next: data => {
        this.servicioMensaje.mostrarMensaje("Producto borrado con exito.");
        this.router.navigate(['/productos']);
      },
        error: err => {
          this.servicioMensaje.mostrarMensaje("Error al eliminar el producto:" + err.error.msg );
        ;}
      });
    }
}
