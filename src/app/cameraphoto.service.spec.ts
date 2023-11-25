import { TestBed } from '@angular/core/testing';

import { CameraphotoService } from './cameraphoto.service';

describe('CameraphotoService', () => {
  let service: CameraphotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CameraphotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
