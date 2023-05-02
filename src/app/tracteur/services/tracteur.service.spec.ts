import { TestBed } from '@angular/core/testing';

import { TracteurService } from './tracteur.service';

describe('TracteurService', () => {
  let service: TracteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TracteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
