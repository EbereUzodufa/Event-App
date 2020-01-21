import { Component, Input } from "@angular/core";

@Component({
    selector: 'simple-modal',
    templateUrl: './simpleModel.component.html',
    styles:[`
        .modal-body{padding:0; height:500px; overflow-y: auto;}
    `]
})

export class SimpleModalComponent{
    @Input() title:string;
    @Input() elementId:string;
}