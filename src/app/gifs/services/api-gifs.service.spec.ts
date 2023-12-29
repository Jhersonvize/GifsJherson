import { TestBed } from '@angular/core/testing';

import { ApiGifsService } from './api-gifs.service';

describe('ApiGifsService', () => {
  let service: ApiGifsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGifsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
