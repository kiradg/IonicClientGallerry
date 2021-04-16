import { TestBed } from '@angular/core/testing';

import { ApiProductService } from './api-products.service';

describe('ApiProductService', () => {
  let service: ApiProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
