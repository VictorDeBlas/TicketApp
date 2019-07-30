import { Session } from './../model/session';
import { Injectable } from '@angular/core';

export class TicketsInCart {
  public id: string;
  constructor(public sessionTitle: string, public sessionDateString: string, public date: Date, public selectedTickets: number) {
    this.id = sessionTitle + sessionDateString;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public ticketsInCart: Map<string, Array<TicketsInCart>> = new Map<string, []>();

  constructor() { }

  public updateCart(session: Session): void {
    const sessionTitle: string = session.event.title;
    if ( this.ticketsInCart.has(sessionTitle)) {
      const currentlySession = this.ticketsInCart.get(sessionTitle);
      const ticketsCurrentlySelectedsIDList: Array<string> = currentlySession.map( tickets => tickets.id);
      session.sessionsList
        .filter(currentSession => currentSession.selectedTickets)
        .forEach(currentSession => {
          if ( ticketsCurrentlySelectedsIDList.indexOf(sessionTitle + currentSession.date) < 0 ) {
            currentlySession.push(new TicketsInCart(sessionTitle, currentSession.date, currentSession.dateTime, currentSession.selectedTickets));
          } else {
            currentlySession.find( foundSession => foundSession.id === sessionTitle + currentSession.date).selectedTickets = currentSession.selectedTickets;
          }
        });
        
    } else {
      const allTicketsSelected: Array<TicketsInCart> = [];
      session.sessionsList
        .filter(currentSession => currentSession.selectedTickets)
        .forEach(currentSession => allTicketsSelected.push(new TicketsInCart(sessionTitle, currentSession.date, currentSession.dateTime, currentSession.selectedTickets)));
        this.ticketsInCart.set(sessionTitle, allTicketsSelected);
    }
  }

  public removeFromCart(sessionTitle: string, ticketsToRemoveID: string): void {
    const selectedTicketsInfo: TicketsInCart = this.ticketsInCart.get(sessionTitle).find( tickets => tickets.id === ticketsToRemoveID);
    selectedTicketsInfo.selectedTickets = selectedTicketsInfo.selectedTickets - 1;
    const updatedTicketsList = this.ticketsInCart.get(sessionTitle).filter(tickets => tickets.selectedTickets > 0);
    if ( updatedTicketsList.length ) {
      this.ticketsInCart.set(sessionTitle, updatedTicketsList);
    } else {
      this.ticketsInCart.delete(sessionTitle);
    }
  }
}
