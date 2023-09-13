import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionNewComponent } from './direccion-new.component';

describe('DireccionNewComponent', () => {
  let component: DireccionNewComponent;
  let fixture: ComponentFixture<DireccionNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DireccionNewComponent]
    });
    fixture = TestBed.createComponent(DireccionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
