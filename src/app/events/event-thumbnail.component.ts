import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'event-thumbail',
    templateUrl: './event-thumbnail.component.html',
    styles:[
        `
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
}