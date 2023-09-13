import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RondaUpdateComponent } from './ronda-update.component';

describe('RondaUpdateComponent', () => {
  let component: RondaUpdateComponent;
  let fixture: ComponentFixture<RondaUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RondaUpdateComponent]
    });
    fixture = TestBed.createComponent(RondaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
