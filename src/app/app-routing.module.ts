import { SessionDetailComponent } from './session-detail/session-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';


const routes: Routes = [
  {path: '', component: EventsListComponent},
  {path: 'session/:id', component: SessionDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
