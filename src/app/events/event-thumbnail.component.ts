import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'event-thumbail',
    templateUrl: './event-thumbnail.component.html'
})

export class EventThumbnailComponent{
    @Input() event: any;
    // @Output() eventClick = new EventEmitter();

    // handleClickMe(){
    //     this.eventClick.emit(this.event.name);
    // }
}