import { Session } from './../model/session';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  public cartOpened: boolean = false;

  constructor(public shoppingCartService: ShoppingCartService) { }

  public toggleCart(): void {
    this.cartOpened = !this.cartOpened;
  }

}
