import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IEvent } from './shared';

@Component({
    selector: 'event-thumbail',
    templateUrl: './event-thumbnail.component.html',
    styles:[
        `
        .am8 { color: #5F9EA0 !important}
        .bold { font-weight: bold}
        .even, .am9{ color: pink}
        .thumbnail{min-height: 210px;}
        .pad-left{margin-left: 15px}
        `
    ]
})

export class EventThumbnailComponent{
    @Input() event: IEvent;
    // someProperty:any = "soem value";

    // logFoo(){
    //     console.log('foo');
    // }
    // @Output() eventClick = new EventEmitter();

    // handleClickMe(){
    //     this.eventClick.emit(this.event.name);
    // }

    getStartTimeClass(){
        //This function get's the approprate class based on Start time class
        if(this.event && this.event.time === '8:00 am'){
            return ['am8', 'bold'];
        } else if(this.event && this.event.time === '9:00 am'){
            return ['am9', 'bold'];
        }
            
        return [];
    }
}