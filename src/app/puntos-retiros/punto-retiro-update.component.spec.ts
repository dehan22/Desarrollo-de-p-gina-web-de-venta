import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoRetiroUpdateComponent } from './punto-retiro-update.component';

describe('PuntoRetiroUpdateComponent', () => {
  let component: PuntoRetiroUpdateComponent;
  let fixture: ComponentFixture<PuntoRetiroUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuntoRetiroUpdateComponent]
    });
    fixture = TestBed.createComponent(PuntoRetiroUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
