import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoHistorialComponent } from './pedido-historial.component';

describe('PedidoHistorialComponent', () => {
  let component: PedidoHistorialComponent;
  let fixture: ComponentFixture<PedidoHistorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoHistorialComponent]
    });
    fixture = TestBed.createComponent(PedidoHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
