import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Event } from '../model/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit, OnChanges {

  @Input() public event: Event;

  constructor(protected router: Router) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.event && changes.event.isFirstChange() ) {
      this.convertTimeToDate();
    }
  }

  public openSessionDetail(event: Event): void {
    this.router.navigateByUrl('session/' + this.event.id);
  }

  private convertTimeToDate(): void {
    this.event.startDateTime = this.convertDateToFormat(new Date(parseInt(this.event.startDate, 10)));
    this.event.endDateTime = this.convertDateToFormat(new Date(parseInt(this.event.endDate, 10)));
  }

  private convertDateToFormat(date: Date): string {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    return [pad(date.getDate()), pad(date.getMonth()+1), date.getFullYear()].join('/');
  }

}
