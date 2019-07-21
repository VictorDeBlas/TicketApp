import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../model/event';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(protected httpClient: HttpClient) { }

  public getEventsList(): Observable<any> {
    return this.httpClient.get<Array<Event>>('../../assets/events.json');
  }

}
