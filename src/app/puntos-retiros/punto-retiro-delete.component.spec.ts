import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoRetiroDeleteComponent } from './punto-retiro-delete.component';

describe('PuntoRetiroDeleteComponent', () => {
  let component: PuntoRetiroDeleteComponent;
  let fixture: ComponentFixture<PuntoRetiroDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuntoRetiroDeleteComponent]
    });
    fixture = TestBed.createComponent(PuntoRetiroDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
