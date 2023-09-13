import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubroNewComponent } from './rubro-new.component';

describe('RubroNewComponent', () => {
  let component: RubroNewComponent;
  let fixture: ComponentFixture<RubroNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RubroNewComponent]
    });
    fixture = TestBed.createComponent(RubroNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
