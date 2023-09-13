import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionUpdateComponent } from './direccion-update.component';

describe('DireccionUpdateComponent', () => {
  let component: DireccionUpdateComponent;
  let fixture: ComponentFixture<DireccionUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DireccionUpdateComponent]
    });
    fixture = TestBed.createComponent(DireccionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
