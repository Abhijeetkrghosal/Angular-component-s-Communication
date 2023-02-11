import { TestBed } from '@angular/core/testing';

import { DistinctcomponentService } from './distinctcomponent.service';

describe('DistinctcomponentService', () => {
  let service: DistinctcomponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistinctcomponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
