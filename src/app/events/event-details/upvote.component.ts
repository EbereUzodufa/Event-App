import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'upvote',
    styleUrls:['./upvote.component.css'],
    templateUrl: './upvote.component.html'
})

export class UpvoteComponent{
    @Input() count: number;
    @Input() set voted(val){
        this.iconColor = val ? 'red' : 'white';
    };
    @Output() vote = new EventEmitter();
    iconColor: string;

    onclick(){
        this.vote.emit({});
    }
}