import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemProducto } from 'src/app/modelos/ItemProducto';
import { ItemProductoService } from 'src/app/servicios/item-producto.service';

@Component({
  selector: 'app-listado-porentrega',
  templateUrl: './listado-porentrega.component.html',
  styleUrls: ['./listado-porentrega.component.css']
})
export class ListadoPorentregaComponent {
  items: ItemProducto[] = [];
  mostrar: string = "Todos";
  constructor( private servicio: ItemProductoService,
    private route: ActivatedRoute){}
  ngOnInit(): void {
    //this.mostrar = String(this.route.snapshot.paramMap.get('mostrar'));
    this.servicio.getListadoPorFormaEntrega(this.mostrar).subscribe(items => this.items = items);
  }

  mostrarSeleccionado(valor:string): void {
		this.mostrar = valor;
    this.mostrarListado();
	}

  mostrarListado(){
    this.servicio.getListadoPorFormaEntrega(this.mostrar).subscribe(items => this.items = items);  
  }
}
