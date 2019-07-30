import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDetailComponent } from './session-detail.component';
import { RouterModule } from '@angular/router';
import { Session } from 'inspector';
import { SessionInfo } from '../model/session-info';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

describe('SessionDetailComponent', () => {
  let component: SessionDetailComponent;
  let fixture: ComponentFixture<SessionDetailComponent>;

  let shoppingCartService: ShoppingCartService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionDetailComponent ],
      imports: [RouterModule.forRoot([]), HttpClientModule],
      providers: [ShoppingCartService]
    })
    .compileComponents();
    shoppingCartService = TestBed.get(ShoppingCartService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should decrement', () => {
    let session: SessionInfo = new SessionInfo();
    session.selectedTickets = 5;
    component.decrement(session);
    expect(session.selectedTickets).toBe(4);
  });

  it('should increment', () => {
    let session: SessionInfo = new SessionInfo();
    session.selectedTickets = 5;
    component.increment(session);
    expect(session.selectedTickets).toBe(6);
  });

  it('should add to cart', () => {
    const updateCartSpy = spyOn(shoppingCartService, 'updateCart');
    component.addToCart();
    expect(updateCartSpy).toHaveBeenCalled();
    
  });

});
