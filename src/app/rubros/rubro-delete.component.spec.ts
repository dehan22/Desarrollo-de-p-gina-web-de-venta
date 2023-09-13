import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubroDeleteComponent } from './rubro-delete.component';

describe('RubroDeleteComponent', () => {
  let component: RubroDeleteComponent;
  let fixture: ComponentFixture<RubroDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RubroDeleteComponent]
    });
    fixture = TestBed.createComponent(RubroDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
