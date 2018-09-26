/*
  Sendhil : 25 Sept 2018 : Demo Task management code
  This is a inbuild service library / Methods for sending and receiving messages 
*/  
import { TestBed } from '@angular/core/testing';

import { MessagingService } from './messaging.service';

describe('MessagingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagingService = TestBed.get(MessagingService);
    expect(service).toBeTruthy();
  });
});
