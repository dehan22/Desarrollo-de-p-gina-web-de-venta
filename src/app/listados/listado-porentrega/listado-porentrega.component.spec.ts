import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPorentregaComponent } from './listado-porentrega.component';

describe('ListadoPorentregaComponent', () => {
  let component: ListadoPorentregaComponent;
  let fixture: ComponentFixture<ListadoPorentregaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoPorentregaComponent]
    });
    fixture = TestBed.createComponent(ListadoPorentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
