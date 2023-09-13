import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RondaNewComponent } from './ronda-new.component';

describe('RondaNewComponent', () => {
  let component: RondaNewComponent;
  let fixture: ComponentFixture<RondaNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RondaNewComponent]
    });
    fixture = TestBed.createComponent(RondaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
