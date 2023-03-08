import { TestBed } from '@angular/core/testing';

import { ApiStationService } from './api-station.service';

describe('ApiStationService', () => {
  let service: ApiStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
