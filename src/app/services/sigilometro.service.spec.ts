import { TestBed } from '@angular/core/testing';

import { SigilometroService } from './sigilometro.service';

describe('SigilometroService', () => {
  let service: SigilometroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigilometroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
