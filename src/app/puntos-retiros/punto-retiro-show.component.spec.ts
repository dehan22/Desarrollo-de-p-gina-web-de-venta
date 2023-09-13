import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoRetiroShowComponent } from './punto-retiro-show.component';

describe('PuntoRetiroShowComponent', () => {
  let component: PuntoRetiroShowComponent;
  let fixture: ComponentFixture<PuntoRetiroShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuntoRetiroShowComponent]
    });
    fixture = TestBed.createComponent(PuntoRetiroShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
