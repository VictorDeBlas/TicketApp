import { Event } from './event';
import { SessionInfo } from './session-info';

export class Session {
    public event: Event;
    public sessionsList: Array<SessionInfo> = [];

    constructor(obj?: any) {
        this.event = new Event(obj.event);
        obj.sessions.forEach( session => this.sessionsList.push(new SessionInfo(session)));
        obj.sessions.sort((a, b) => {
            if ( a.date < b.date ) {
              return -1;
            } else {
              return 1;
            }
          });
    }
}