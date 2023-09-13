import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubroUpdateComponent } from './rubro-update.component';

describe('RubroUpdateComponent', () => {
  let component: RubroUpdateComponent;
  let fixture: ComponentFixture<RubroUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RubroUpdateComponent]
    });
    fixture = TestBed.createComponent(RubroUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
