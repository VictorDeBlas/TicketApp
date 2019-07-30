import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public headerTitle: string;

  constructor(protected router: Router) {
    this.router.events.subscribe(event => {
      if ( event instanceof NavigationEnd ) {
        this.headerTitle = event.url.indexOf('session') > -1 ? 'Sessions' : 'Catalog';
        document.title = this.headerTitle;
      }
    });
  }
}
