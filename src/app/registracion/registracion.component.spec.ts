import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistracionComponent } from './registracion.component';

describe('RegistracionComponent', () => {
  let component: RegistracionComponent;
  let fixture: ComponentFixture<RegistracionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistracionComponent]
    });
    fixture = TestBed.createComponent(RegistracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
