import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsuarioShowComponent } from './usuarios/usuario-show.component';
import { ProductoShowComponent } from './productos/producto-show.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { RegistracionComponent } from './registracion/registracion.component';
import { SesionComponent } from './sesion/sesion.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuariosListComponent } from './usuarios/usuarios-list.component';
import { UsuarioDeleteComponent } from './usuarios/usuario-delete.component';
import { UsuarioUpdateComponent } from './usuarios/usuario-update.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidoCancelarComponent } from './pedidos/pedido-cancelar.component';
import { PedidoShowComponent } from './pedidos/pedido-show.component';
import { PedidoConfirmarComponent } from './pedidos/pedido-confirmar.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RubrosComponent } from './rubros/rubros.component';
import { RubroShowComponent } from './rubros/rubro-show.component';
import { ProductoNewComponent } from './productos/producto-new.component';
import { ProductoDeleteComponent } from './productos/producto-delete.component';
import { RubroDeleteComponent } from './rubros/rubro-delete.component';
import { RubroNewComponent } from './rubros/rubro-new.component';
import { ProductorNewComponent } from './productores/productor-new.component';
import { ProductoresComponent } from './productores/productores.component';
import { PuntosRetirosComponent } from './puntos-retiros/puntos-retiros.component';
import { PuntoRetiroNewComponent } from './puntos-retiros/punto-retiro-new.component';
import { DireccionesComponent } from './direcciones/direcciones.component';
import { DireccionUpdateComponent } from './direcciones/direccion-update.component';
import { DireccionNewComponent } from './direcciones/direccion-new.component';
import { RubroUpdateComponent } from './rubros/rubro-update.component';
import { PuntoRetiroUpdateComponent } from './puntos-retiros/punto-retiro-update.component';
import { PuntoRetiroDeleteComponent } from './puntos-retiros/punto-retiro-delete.component';
import { PuntoRetiroShowComponent } from './puntos-retiros/punto-retiro-show.component';
import { ProductoUpdateComponent } from './productos/producto-update.component';
import { RondasComponent } from './rondas/rondas.component';
import { RondaNewComponent } from './rondas/ronda-new.component';
import { RondaUpdateComponent } from './rondas/ronda-update.component';
import { RondaDeleteComponent } from './rondas/ronda-delete.component';
import { RondaShowComponent } from './rondas/ronda-show.component';
import { ItemComponent } from './item/item.component';
import { PedidoHistorialComponent } from './pedidos/pedido-historial.component';
import { ListadoProductoresComponent } from './listados/listado-productores/listado-productores.component';
import { ListadoPorentregaComponent } from './listados/listado-porentrega/listado-porentrega.component';
import { PedidoEntregarComponent } from './pedidos/pedido-entregar/pedido-entregar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioShowComponent,
    ProductoShowComponent,
    PagenotfoundComponent,
    HomeComponent,
    RegistracionComponent,
    SesionComponent,
    ProductosComponent,
    UsuariosListComponent,
    UsuarioDeleteComponent,
    UsuarioUpdateComponent,
    CarritoComponent,
    PedidosComponent,
    PedidoCancelarComponent,
    PedidoShowComponent,
    PedidoConfirmarComponent,
    QuienesSomosComponent,
    RubrosComponent,
    RubroShowComponent,
    ProductoNewComponent,
    ProductoDeleteComponent,
    RubroDeleteComponent,
    RubroNewComponent,
    ProductorNewComponent,
    ProductoresComponent,
    PuntosRetirosComponent,
    PuntoRetiroNewComponent,
    DireccionesComponent,
    DireccionUpdateComponent,
    DireccionNewComponent,
    RubroUpdateComponent,
    PuntoRetiroUpdateComponent,
    PuntoRetiroDeleteComponent,
    PuntoRetiroShowComponent,
    ProductoUpdateComponent,
    RondasComponent,
    RondaNewComponent,
    RondaUpdateComponent,
    RondaDeleteComponent,
    RondaShowComponent,
    ItemComponent,
    PedidoHistorialComponent,
    ListadoProductoresComponent,
    ListadoPorentregaComponent,
    PedidoEntregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
