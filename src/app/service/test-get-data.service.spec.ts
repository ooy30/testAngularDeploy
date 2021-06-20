import { TestBed } from '@angular/core/testing';

import { TestGetDataService } from './test-get-data.service';

describe('TestGetDataService', () => {
  let service: TestGetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestGetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
