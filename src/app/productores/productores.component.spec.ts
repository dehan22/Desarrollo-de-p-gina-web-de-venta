import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoresComponent } from './productores.component';

describe('ProductoresComponent', () => {
  let component: ProductoresComponent;
  let fixture: ComponentFixture<ProductoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoresComponent]
    });
    fixture = TestBed.createComponent(ProductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
