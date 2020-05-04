import { TestBed } from '@angular/core/testing';

import { PreviousCardsService } from './previous-cards.service';

describe('PreviousCardsService', () => {
  let service: PreviousCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
