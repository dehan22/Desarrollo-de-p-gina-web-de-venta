import { TestBed } from '@angular/core/testing';

import { PuntoRetiroService } from './punto-retiro.service';

describe('PuntoRetiroService', () => {
  let service: PuntoRetiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntoRetiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
