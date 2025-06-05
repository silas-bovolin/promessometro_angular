import { TestBed } from '@angular/core/testing';

import { PromessaService } from './promessa.service';

describe('PromessaService', () => {
  let service: PromessaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromessaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
