import { TestBed } from '@angular/core/testing';

import { ShoppingCartService } from './shopping-cart.service';

xdescribe('ShoppingCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingCartService = TestBed.get(ShoppingCartService);
    expect(service).toBeTruthy();
  });
});
