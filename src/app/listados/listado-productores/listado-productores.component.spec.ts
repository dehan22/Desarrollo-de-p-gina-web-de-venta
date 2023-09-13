import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProductoresComponent } from './listado-productores.component';

describe('ListadoProductoresComponent', () => {
  let component: ListadoProductoresComponent;
  let fixture: ComponentFixture<ListadoProductoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoProductoresComponent]
    });
    fixture = TestBed.createComponent(ListadoProductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
