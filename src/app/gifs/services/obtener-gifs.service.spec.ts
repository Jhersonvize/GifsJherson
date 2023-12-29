import { TestBed } from '@angular/core/testing';

import { ObtenerGifsService } from './obtener-gifs.service';

describe('ObtenerGifsService', () => {
  let service: ObtenerGifsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerGifsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
