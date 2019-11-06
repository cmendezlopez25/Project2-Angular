import { TestBed } from '@angular/core/testing';

import { AccountListService } from './account-list.service';

describe('AccountListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountListService = TestBed.get(AccountListService);
    expect(service).toBeTruthy();
  });
});
