import { Component, Input } from "@angular/core";

@Component({
    selector: 'event-thumbail',
    templateUrl: './event-thumbnail.component.html'
})

export class EventThumbnailComponent{
    @Input() event: any;
}