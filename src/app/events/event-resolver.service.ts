import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { EventService } from "./shared/events.services";
import { map } from "rxjs/operators";

@Injectable()

export class EventResolver implements Resolve<any> {
    constructor(private eventService:EventService){

    }

    resolve(route:ActivatedRouteSnapshot){
        try {
            return this.eventService.getEvent(route.params['id']);
        } catch (error) {
            console.error('resolve', error);
        }
        
    }
}