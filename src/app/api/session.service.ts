import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../model/session';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(protected httpClient: HttpClient) { }

  public getSessionById(id: number): Observable<Session> {
    return this.httpClient.get<Session>('../../assets/event-info-' + id + '.json');
  }
}