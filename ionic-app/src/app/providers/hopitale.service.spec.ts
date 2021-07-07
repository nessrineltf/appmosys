import { TestBed } from '@angular/core/testing';

import { HopitaleService } from './hopitale.service';

describe('HopitaleService', () => {
  let service: HopitaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HopitaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
