import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/events.services';
import { map } from 'rxjs/operators';

@Injectable()

export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {

    }

    resolve() {
        try {
            return this.eventService.getEvents();
        } catch (error) {
            console.error('resolve', error);
        }

    }
}
