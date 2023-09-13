import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PuntosRetirosComponent } from './puntos-retiros.component';

describe('PuntosRetirosComponent', () => {
  let component: PuntosRetirosComponent;
  let fixture: ComponentFixture<PuntosRetirosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuntosRetirosComponent]
    });
    fixture = TestBed.createComponent(PuntosRetirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
