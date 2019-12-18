import { TestBed } from '@angular/core/testing';

import { StartimeService } from './startime.service';

describe('StartimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartimeService = TestBed.get(StartimeService);
    expect(service).toBeTruthy();
  });
});
