import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemProducto } from 'src/app/modelos/ItemProducto';
import { Usuario } from 'src/app/modelos/usuario';
import { ItemProductoService } from 'src/app/servicios/item-producto.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-listado-productores',
  templateUrl: './listado-productores.component.html',
  styleUrls: ['./listado-productores.component.css']
})
export class ListadoProductoresComponent implements OnInit{

  items: ItemProducto[] = [];
  productor: Usuario = new Usuario;
  productores: Usuario[] = [];
  mostrar: string = "Todos";
  constructor( private servicio: ItemProductoService,
    private servicioProductor: UsuarioService,
    private route: ActivatedRoute){}
  ngOnInit(): void {
    this.servicioProductor.getProductores().subscribe(productores => this.productores = productores);
  }

  mostrarSeleccionado(valor:string): void {
		this.mostrar = valor;
	}
  
  productorSeleccionado(prod:Usuario): void {
    this.productor = prod;
    this.mostrarListado();
  }

  mostrarListado(){
    this.servicio.getListadoPorProdctores(Number(this.productor.id)).subscribe(items => this.items = items);
  }
}
