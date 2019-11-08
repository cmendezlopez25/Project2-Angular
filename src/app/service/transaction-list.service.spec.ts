import { TestBed } from '@angular/core/testing';

import { TransactionListService } from './transaction-list.service';

describe('TransactionListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionListService = TestBed.get(TransactionListService);
    expect(service).toBeTruthy();
  });
});
