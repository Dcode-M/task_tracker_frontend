import { TestBed } from '@angular/core/testing';

import { DatareturnService } from './datareturn.service';

describe('DatareturnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatareturnService = TestBed.get(DatareturnService);
    expect(service).toBeTruthy();
  });
});
