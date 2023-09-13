import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoEntregarComponent } from './pedido-entregar.component';

describe('PedidoEntregarComponent', () => {
  let component: PedidoEntregarComponent;
  let fixture: ComponentFixture<PedidoEntregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoEntregarComponent]
    });
    fixture = TestBed.createComponent(PedidoEntregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
