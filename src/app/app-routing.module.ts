import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UsuarioShowComponent } from './usuarios/usuario-show.component';
import { ProductoShowComponent } from './productos/producto-show.component';
import { HomeComponent } from './home/home.component';
import { SesionComponent } from './sesion/sesion.component';
import { RegistracionComponent } from './registracion/registracion.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuariosListComponent } from './usuarios/usuarios-list.component';
import { UsuarioDeleteComponent } from './usuarios/usuario-delete.component';
import { UsuarioUpdateComponent } from './usuarios/usuario-update.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidoCancelarComponent } from './pedidos/pedido-cancelar.component';
import { PedidoConfirmarComponent } from './pedidos/pedido-confirmar.component';
import { PedidoShowComponent } from './pedidos/pedido-show.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RubrosComponent } from './rubros/rubros.component';
import { RubroShowComponent } from './rubros/rubro-show.component';
import { ProductoNewComponent } from './productos/producto-new.component';
import { ProductoDeleteComponent } from './productos/producto-delete.component';
import { RubroNewComponent } from './rubros/rubro-new.component';
import { RubroDeleteComponent } from './rubros/rubro-delete.component';
import { ProductorNewComponent } from './productores/productor-new.component';
import { ProductoresComponent } from './productores/productores.component';
import { PuntosRetirosComponent } from './puntos-retiros/puntos-retiros.component';
import { DireccionesComponent } from './direcciones/direcciones.component';
import { DireccionUpdateComponent } from './direcciones/direccion-update.component';
import { DireccionNewComponent } from './direcciones/direccion-new.component';
import { PuntoRetiroNewComponent } from './puntos-retiros/punto-retiro-new.component';
import { RubroUpdateComponent } from './rubros/rubro-update.component';
import { PuntoRetiroUpdateComponent } from './puntos-retiros/punto-retiro-update.component';
import { PuntoRetiroDeleteComponent } from './puntos-retiros/punto-retiro-delete.component';
import { PuntoRetiroShowComponent } from './puntos-retiros/punto-retiro-show.component';
import { ProductoUpdateComponent } from './productos/producto-update.component';
import { RondasComponent } from './rondas/rondas.component';
import { RondaNewComponent } from './rondas/ronda-new.component';
import { RondaUpdateComponent } from './rondas/ronda-update.component';
import { RondaShowComponent } from './rondas/ronda-show.component';
import { RondaDeleteComponent } from './rondas/ronda-delete.component';
import { PedidoHistorialComponent } from './pedidos/pedido-historial.component';
import { ListadoProductoresComponent } from './listados/listado-productores/listado-productores.component';
import { ListadoPorentregaComponent } from './listados/listado-porentrega/listado-porentrega.component';
import { PedidoEntregarComponent } from './pedidos/pedido-entregar/pedido-entregar.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch: 'full'},
  {path:'registracion', component:RegistracionComponent},
  {path:'sesion', component:SesionComponent},
  {path:'usuarios', component:UsuariosListComponent},
  {path:'productores', component:ProductoresComponent},
  {path:'productor/new', component:ProductorNewComponent},
  {path:'perfil/:id', component:UsuarioShowComponent},
  {path:'perfil/:id/update', component:UsuarioUpdateComponent},
  {path:'perfil/:id/delete', component:UsuarioDeleteComponent},
  {path:'direcciones', component:DireccionesComponent},
  {path:'direccion/new', component:DireccionNewComponent},
  {path:'direccion/:id/update', component:DireccionUpdateComponent},
  //{path:'direccion/:id/delete', component:DireccionDeleteComponent},
  {path:'productos', component:ProductosComponent},
  {path:'producto/new', component:ProductoNewComponent},
  {path:'producto/:id', component:ProductoShowComponent},
  {path:'producto/:id/update', component:ProductoUpdateComponent},
  {path:'producto/:id/delete', component:ProductoDeleteComponent},
  {path:'carrito/:id', component:CarritoComponent},
  {path:'pedidos', component:PedidosComponent},
  {path:'historial/:id', component:PedidoHistorialComponent},
  {path:'pedido/:id', component:PedidoShowComponent},
  {path:'pedido/:id/cancelar', component:PedidoCancelarComponent},
  {path:'pedido/:id/confirmar', component:PedidoConfirmarComponent},
  {path:'pedido/:id/entregar', component:PedidoEntregarComponent},
  {path:'rubros', component:RubrosComponent},
  {path:'rubro/new', component:RubroNewComponent},
  {path:'rubro/:id', component:RubroShowComponent},
  {path:'rubro/:id/update', component:RubroUpdateComponent},
  {path:'rubro/:id/delete', component:RubroDeleteComponent},
  {path:'puntos_retiro', component:PuntosRetirosComponent},
  {path:'punto_retiro/new', component:PuntoRetiroNewComponent},
  {path:'punto_retiro/:id', component:PuntoRetiroShowComponent},
  {path:'punto_retiro/:id/update', component:PuntoRetiroUpdateComponent},
  {path:'punto_retiro/:id/delete', component:PuntoRetiroDeleteComponent},
  {path:'rondas', component:RondasComponent},
  {path:'ronda/new', component:RondaNewComponent},
  {path:'ronda/:id', component:RondaShowComponent},
  {path:'ronda/:id/update', component:RondaUpdateComponent},
  {path:'ronda/:id/delete', component:RondaDeleteComponent},
  {path:'quienes-somos', component:QuienesSomosComponent},
  {path:'pedidos-productor', component:ListadoProductoresComponent},
  {path:'pedidos-forma-entrega', component:ListadoPorentregaComponent},
  {path:'**', pathMatch: 'full', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }