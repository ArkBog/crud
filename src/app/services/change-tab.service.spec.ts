import { TestBed } from '@angular/core/testing';

import { ChangeTabService } from './change-tab.service';

describe('ChangeTabService', () => {
  let service: ChangeTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
