import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubroShowComponent } from './rubro-show.component';

describe('RubroShowComponent', () => {
  let component: RubroShowComponent;
  let fixture: ComponentFixture<RubroShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RubroShowComponent]
    });
    fixture = TestBed.createComponent(RubroShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
