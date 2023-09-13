import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoConfirmarComponent } from './pedido-confirmar.component';

describe('PedidoConfirmarComponent', () => {
  let component: PedidoConfirmarComponent;
  let fixture: ComponentFixture<PedidoConfirmarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoConfirmarComponent]
    });
    fixture = TestBed.createComponent(PedidoConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
