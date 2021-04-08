import { TestBed } from '@angular/core/testing';

import { SingupDataService } from './singup-data.service';

describe('SingupDataService', () => {
  let service: SingupDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingupDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
