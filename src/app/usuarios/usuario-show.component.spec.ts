import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioShowComponent } from './usuario-show.component';

describe('UsuarioShowComponent', () => {
  let component: UsuarioShowComponent;
  let fixture: ComponentFixture<UsuarioShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioShowComponent]
    });
    fixture = TestBed.createComponent(UsuarioShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
