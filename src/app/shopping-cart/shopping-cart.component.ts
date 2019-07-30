import { Component, ElementRef, HostListener } from '@angular/core';
import { ShoppingCartService, TicketsInCart } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent{

  public cartOpened: boolean = false;

  @HostListener('document:click', ['$event'])
    clickout(event) {
      if(this.cartOpened && !this.eRef.nativeElement.contains(event.target)) {
        this.cartOpened = false;
      }
    }

  constructor(public shoppingCartService: ShoppingCartService, private eRef: ElementRef) {}

  public removeItemFromCart(currentSession, tickets: TicketsInCart): void {
    this.shoppingCartService.removeFromCart(currentSession.key, tickets.id);

  }

  public toggleCart(): void {
    this.cartOpened = !this.cartOpened;
  }

}
