import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from './shared';

@Component({
    selector: 'create-event',
    templateUrl: './create-event.component.html'
})

export class CreateEventComponent{
    newEvent;
    isDirty:boolean = true;

    constructor(private router: Router, private eventService: EventService){

    } 

    saveEvent(formValues){
        try {
            this.eventService.saveEvent(formValues);
            this.isDirty = false;
            this.router.navigate(['events/']);
            console.log('formvalues', this.newEvent, this.isDirty);
        } catch (error) {
            console.error(error);
        }
        
    }

    cancel(){
        this.router.navigate(['events']);
    }
}