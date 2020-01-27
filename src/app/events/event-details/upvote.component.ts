import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'upvote',
    styleUrls:['./upvote.component.css'],
    templateUrl: './upvote.component.html'
})

export class UpvoteComponent{
    @Input() count: number;
    @Input() voted: boolean;
    @Output() vote = new EventEmitter();

    onclick(){
        this.vote.emit({});
    }
}