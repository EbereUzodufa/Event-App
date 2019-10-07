import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `
      <navBar></navBar>
      <events-list></events-list>
    `,
})
export class EventsAppComponent {
  title = 'App';
}