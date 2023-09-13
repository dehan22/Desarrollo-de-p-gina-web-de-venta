import { TestBed } from '@angular/core/testing';

import { ItemProductoService } from './item-producto.service';

describe('ItemProductoService', () => {
  let service: ItemProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
