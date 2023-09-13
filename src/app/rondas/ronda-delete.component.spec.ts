import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RondaDeleteComponent } from './ronda-delete.component';

describe('RondaDeleteComponent', () => {
  let component: RondaDeleteComponent;
  let fixture: ComponentFixture<RondaDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RondaDeleteComponent]
    });
    fixture = TestBed.createComponent(RondaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
