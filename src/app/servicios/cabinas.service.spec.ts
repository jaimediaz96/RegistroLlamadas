import { TestBed } from '@angular/core/testing';

import { CabinasService } from './cabinas.service';

describe('CabinasService', () => {
  let service: CabinasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabinasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
