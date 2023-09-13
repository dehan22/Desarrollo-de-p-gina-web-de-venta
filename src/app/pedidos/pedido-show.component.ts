import { Component, Input } from '@angular/core';
import { Pedido } from 'src/app/modelos/pedido';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from 'src/app/servicios/pedido.service';
@Component({
  selector: 'app-pedido-show',
  templateUrl: './pedido-show.component.html',
  styleUrls: ['./pedido-show.component.css']
})
export class PedidoShowComponent {
  @Input() pedido?: Pedido;

  constructor(
    private route: ActivatedRoute,
    private servicio: PedidoService,
  ) {}

  ngOnInit(){
    this.getPedido();
  }

  getPedido(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.servicio.getPedido(id)
      .subscribe(pedido => this.pedido = pedido);
  }

}
