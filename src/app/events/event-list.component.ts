import { Component, OnInit } from "@angular/core";
import { EventService } from './shared/events.services';
// import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

declare let toastr

@Component({
    selector: 'events-list',
    templateUrl: './event-list.component.html'
})

export class EventListComponent implements OnInit{

    // handleEventClickMe(data){
    //     console.log("received: ", data);
    // }

    //Declare events as an array as any
    events: IEvent[];
    //Calling our service
    constructor(private eventService: EventService, private route:ActivatedRoute){

    }

    //Attaching to ngOnInit lifecylce hook and OnInit implemented
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      // this.eventService.getEvents().subscribe(events=> {
      //   this.events = events
      // });

      this.events = this.route.snapshot.data['events'];
    }

    //Creating an external service using toastr
    // handleThumbnailClick(eventName){
    //   this.toastr.success(eventName);
    // }
}