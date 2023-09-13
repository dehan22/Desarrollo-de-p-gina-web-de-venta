import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoCancelarComponent } from './pedido-cancelar.component';

describe('PedidoCancelarComponent', () => {
  let component: PedidoCancelarComponent;
  let fixture: ComponentFixture<PedidoCancelarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoCancelarComponent]
    });
    fixture = TestBed.createComponent(PedidoCancelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
