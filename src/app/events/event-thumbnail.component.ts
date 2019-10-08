import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'event-thumbail',
    templateUrl: './event-thumbnail.component.html',
    styles:[
        `
        .green { color: green !important}
        .bold { font-weight: bold}
        .even, .pink{ color: pink}
        .thumbnail{min-height: 210px;}
        .pad-left{margin-left: 15px}
        `
    ]
})

export class EventThumbnailComponent{
    @Input() event: any;
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
            return ['green', 'bold'];
        } else if(this.event && this.event.time === '9:00 am'){
            return ['pink', 'bold'];
        }
            
        return [];
    }
}