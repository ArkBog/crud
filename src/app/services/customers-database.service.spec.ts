import { TestBed } from '@angular/core/testing';

import { CustomersDatabaseService } from './customers-database.service';

describe('CustomersDatabaseService', () => {
  let service: CustomersDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
