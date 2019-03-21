import { TestBed, inject } from '@angular/core/testing';

import { ProductLandingPageService } from './product-landing-page.service';

describe('ProductLandingPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductLandingPageService]
    });
  });

  it('should be created', inject([ProductLandingPageService], (service: ProductLandingPageService) => {
    expect(service).toBeTruthy();
  }));
});
