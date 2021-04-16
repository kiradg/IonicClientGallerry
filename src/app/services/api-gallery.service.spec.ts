import { TestBed } from '@angular/core/testing';

import { ApiGalleryService } from './api-gallery.service';

describe('ApiGalleryService', () => {
  let service: ApiGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
