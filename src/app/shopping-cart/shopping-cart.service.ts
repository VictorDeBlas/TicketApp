import { Session } from './../model/session';
import { Injectable } from '@angular/core';

export class TicketsInCart {
  constructor( public date: Date, public selectedTickets: number) {}
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public ticketsInCart: Map<string, Array<TicketsInCart>> = new Map<string, []>();

  constructor() { }

  public updateCart(session: Session): void {
    const sessionTitle: string = session.event.title;
    const allTicketsSelected: Array<TicketsInCart> = [];
    session.sessionsList
      .filter( currentSession => currentSession.selectedTickets)
      .forEach( currentSession => allTicketsSelected.push(new TicketsInCart(currentSession.dateTime, currentSession.selectedTickets)));
    this.ticketsInCart.set(sessionTitle, allTicketsSelected);
  }
}
