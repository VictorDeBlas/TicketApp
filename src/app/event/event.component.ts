import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../model/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() public event: Event;

  constructor(protected router: Router) { }

  ngOnInit() {
  }

  public openSessionDetail(event: Event): void {
    this.router.navigateByUrl('session/' + this.event.id);
  }

}
