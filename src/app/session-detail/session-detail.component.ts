import { ShoppingCartService } from './../shopping-cart/shopping-cart.service';
import { SessionInfo } from './../model/session-info';
import { Session } from './../model/session';
import { SessionService } from './../api/session.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.scss']
})
export class SessionDetailComponent implements OnInit {

  public session: Session;

  constructor(private route: ActivatedRoute, 
              protected sessionApi: SessionService, 
              protected router: Router, 
              public shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.getSessionInfo();
  }

  public returnToList(): void {
    this.router.navigateByUrl('');
  }

  public decrement(session: SessionInfo): void {
    session.selectedTickets = session.selectedTickets - 1;
  }

  public increment(session: SessionInfo): void {
    session.selectedTickets = session.selectedTickets + 1;
  }

  public addToCart(): void {
      this.shoppingCartService.updateCart(this.session);
  }

  private getSessionInfo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sessionApi.getEventInfo(id)
      .subscribe(
        sessionInfo => this.session = sessionInfo,
        error => console.log(error));
  }

}
