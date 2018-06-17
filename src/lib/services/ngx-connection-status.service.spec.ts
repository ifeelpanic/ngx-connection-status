import { TestBed, inject } from '@angular/core/testing';

import { NgxConnectionStatusService } from './ngx-connection-status.service';

describe('NgxConnectionStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxConnectionStatusService]
    });
  });

  it('should be created', inject([NgxConnectionStatusService], (service: NgxConnectionStatusService) => {
    expect(service).toBeTruthy();
  }));
});
