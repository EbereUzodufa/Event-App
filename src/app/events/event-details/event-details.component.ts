import { Component } from '@angular/core';
import { EventService } from '../shared/events.services';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container{
            padding-left: 20px;
            padding-right: 20px;
        }
        .event-image{
            height: 100px;
        }
        a{
            cursor: pointer;
        }
        `
    ]
})

export class EventDetailsComponent {
    event: IEvent;
    addMode: boolean;
    filterBy = 'all';
    sortBy = 'votes';

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }
    ngOnInit(): void {
        // By not using as static snapshot, we can navigate from event to events using the same component
        this.route.data.forEach((data) => {
            this.event = data['event'];
            this.addMode = false;
        });
        // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSection() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        console.log('pushed session', session);
        this.eventService.saveEvent(this.event).subscribe();
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}
