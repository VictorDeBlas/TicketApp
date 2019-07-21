import { SessionService } from './../api/session.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.scss']
})
export class SessionDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, protected sessionApi: SessionService) { }

  ngOnInit() {
    this.getSessionInfo();
  }

  private getSessionInfo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.sessionApi.getSessionById(id)
      .subscribe(
        sessionInfo => console.log(sessionInfo),
        error => console.log(error));
  }

}
