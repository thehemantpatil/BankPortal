import { TestBed } from '@angular/core/testing';

import { FetchPaymentDetailService } from './fetch-payment-detail.service';

describe('FetchPaymentDetailService', () => {
  let service: FetchPaymentDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPaymentDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
