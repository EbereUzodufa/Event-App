import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  EventResolver,
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';

import {
  CollapsibleWellComponent,
  // Toastr,
  ToastrService,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';

import { Error404Component } from './errors/404.component';
import { appRoute } from './routes';
import { CommonModule } from '@angular/common';
import { AuthService } from './user/auth.service';
// import { window } from 'rxjs/operators';

// let toastr:Toastr = window['toastr'];
const jQuery = window['$'];
declare var $: any;

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    UpvoteComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    LocationValidator,
  ],
  providers: [
    EventService,
    // {
    //   provide: TOASTR_TOKEN,
    //   useValue: toastr
    // },
    EventResolver,
    EventListResolver,
    AuthService,
    VoterService,
    ToastrService,
    {
        provide: JQ_TOKEN,
        useValue: jQuery
      },
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
