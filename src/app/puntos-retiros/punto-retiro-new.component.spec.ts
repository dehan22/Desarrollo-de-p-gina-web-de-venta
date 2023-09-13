import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoRetiroNewComponent } from './punto-retiro-new.component';

describe('PuntoRetiroNewComponent', () => {
  let component: PuntoRetiroNewComponent;
  let fixture: ComponentFixture<PuntoRetiroNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuntoRetiroNewComponent]
    });
    fixture = TestBed.createComponent(PuntoRetiroNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
