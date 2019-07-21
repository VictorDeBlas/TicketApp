import { Component, OnInit } from '@angular/core';
import { EventsService } from '../api/events.service';
import { Event } from '../model/event'

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  public eventList: Array<Event> = [];

  constructor(protected eventsApi: EventsService) { }

  ngOnInit() {
    this.getEventsList();
  }

  private getEventsList(): void {
    this.eventsApi.getEventsList()
      .subscribe( list => this.eventList = list);
  }

}
