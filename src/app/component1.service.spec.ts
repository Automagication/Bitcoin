import { TestBed, inject } from '@angular/core/testing';

import { Component1Service } from './component1.service';

describe('Component1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Component1Service]
    });
  });

  it('should be created', inject([Component1Service], (service: Component1Service) => {
    expect(service).toBeTruthy();
  }));
});
