import { TestBed } from '@angular/core/testing';

import { NgxEbAvatarService } from './ngx-eb-avatar.service';

describe('NgxEbAvatarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxEbAvatarService = TestBed.get(NgxEbAvatarService);
    expect(service).toBeTruthy();
  });
});
