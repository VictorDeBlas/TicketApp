import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartService, TicketsInCart } from './shopping-cart.service';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  let shoppingCartService: ShoppingCartService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartComponent ],
      providers: [ShoppingCartService]
    })
    .compileComponents();
    shoppingCartService = TestBed.get(ShoppingCartService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should remove item from cart', () => {
    const event: MouseEvent = {} as MouseEvent;
    const ticketsInCart: TicketsInCart = new TicketsInCart('dummyTitle', 'dummyDate', new Date(), 0);
    const removeFromCartSpy = spyOn(shoppingCartService, 'removeFromCart');
    component.removeItemFromCart(event, 'dummyKey', ticketsInCart);
    expect(removeFromCartSpy).toHaveBeenCalledWith('dummyKey', 'dummyTitle' + 'dummyDate');
  });*/

  it('should change cartOpened value', () => {
    component.cartOpened = false;
    component.toggleCart();
    expect(component.cartOpened).toBe(true);
  })
});
