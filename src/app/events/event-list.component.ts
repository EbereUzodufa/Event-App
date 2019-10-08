import { Component, OnInit } from "@angular/core";
import { EventService } from './shared/events.services';

@Component({
    selector: 'events-list',
    templateUrl: './event-list.component.html'
})

export class EventListComponent implements OnInit{

    // handleEventClickMe(data){
    //     console.log("received: ", data);
    // }

    //Declare events as an array as any
    events: any[];
    //Calling our service
    constructor(private eventService: EventService){

    }

    //Attaching to ngOnInit lifecylce hook and OnInit implemented
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.events = this.eventService.getEvents();
    }
}