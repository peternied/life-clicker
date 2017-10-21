import { TestBed, inject } from '@angular/core/testing';

import { MitoTrackerService } from './mito-tracker.service';

describe('MitoTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MitoTrackerService]
    });
  });

  it('should be created', inject([MitoTrackerService], (service: MitoTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
