import { TestBed } from '@angular/core/testing';

import { ExcuseApiService } from './excuse-api.service';

describe('ExcuseApiService', () => {
  let service: ExcuseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcuseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
