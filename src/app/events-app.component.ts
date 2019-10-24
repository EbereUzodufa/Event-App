import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `
      <navBar></navBar>
      <router-outlet></router-outlet>
    `,
})
export class EventsAppComponent {
  title = 'App';
}