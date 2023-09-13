import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from 'src/app/modelos/pedido';
import { PedidoService } from 'src/app/servicios/pedido.service';

@Component({
  selector: 'app-pedido-entregar',
  templateUrl: './pedido-entregar.component.html',
  styleUrls: ['./pedido-entregar.component.css']
})
export class PedidoEntregarComponent {
  pedido: Pedido = new Pedido;

  constructor( private servicio: PedidoService,
    private route: ActivatedRoute,
    private router: Router
     ){
  }
  
  ngOnInit(): void {
    this.getPedido();
  }

  getPedido(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.getPedido(id)
      .subscribe(pedido => {this.pedido = pedido, this.entregarPedido()});
  }

  entregarPedido(){
    console.log(this.pedido);
    this.pedido.entregado = true;
    this.servicio.modificarPedido(this.pedido).subscribe({
      next: response => {console.log('Pedido entregado:', response), this.router.navigate(['/pedidos']);},
      error: err => {console.log('Error al marcar pedido como entregado:', err.error);}
    });
  }
}
