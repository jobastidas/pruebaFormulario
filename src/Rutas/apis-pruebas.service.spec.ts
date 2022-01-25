import { TestBed } from '@angular/core/testing';

import { ApisPruebasService } from './apis-pruebas.service';

describe('ApisPruebasService', () => {
  let service: ApisPruebasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisPruebasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
