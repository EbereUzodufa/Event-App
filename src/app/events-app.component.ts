import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'event-app',
  template: `
      <navBar></navBar>
      <router-outlet></router-outlet>
    `,
})
export class EventsAppComponent implements OnInit{
  title = 'App';

  constructor(private auth: AuthService){}

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}