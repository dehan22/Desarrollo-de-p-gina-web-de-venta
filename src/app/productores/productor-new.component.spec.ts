import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorNewComponent } from './productor-new.component';

describe('ProductorNewComponent', () => {
  let component: ProductorNewComponent;
  let fixture: ComponentFixture<ProductorNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductorNewComponent]
    });
    fixture = TestBed.createComponent(ProductorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
