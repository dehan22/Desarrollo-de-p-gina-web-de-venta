import { Component } from '@angular/core';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertaService } from 'src/app/alerta.service';

@Component({
  selector: 'app-cancelar-pedido',
  templateUrl: './pedido-cancelar.component.html',
  styleUrls: ['./pedido-cancelar.component.css'],
  providers: [PedidoService, AlertaService, Router],
})
export class PedidoCancelarComponent {
  constructor(
    private route: ActivatedRoute,
    private servicio: PedidoService,
    private router: Router,
    private servicioMensaje: AlertaService
  )
  {}

  ngOnInit(): void {
    this.cancelPedido();
  }

  cancelPedido(){
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.bajaPedido(id).subscribe({
      next: response => {this.servicioMensaje.mostrarMensaje("Pedido cancelado."), this.router.navigateByUrl('/pedidos');},
      error: err => {this.servicioMensaje.mostrarMensaje("Error al cancelar pedido:" + err.error);}
    });
  }
}
