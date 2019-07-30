import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../model/event';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(protected httpClient: HttpClient) { }

  public getEvents(): Observable<any> {
    return this.httpClient.get<Array<Event>>('../../assets/events.json')
      .pipe(
        map( response => {
          const eventList: Array<Event> = [];
          response.forEach(ev => eventList.push(new Event(ev)));
          return eventList
            .sort((a: Event, b: Event) => { 
              if ( a.endDate < b.endDate) {
                return -1;
              } else {
                return 1;
              }
            });
        })
      );
  }

}
