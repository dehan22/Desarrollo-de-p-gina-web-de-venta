import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RondaShowComponent } from './ronda-show.component';

describe('RondaShowComponent', () => {
  let component: RondaShowComponent;
  let fixture: ComponentFixture<RondaShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RondaShowComponent]
    });
    fixture = TestBed.createComponent(RondaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
