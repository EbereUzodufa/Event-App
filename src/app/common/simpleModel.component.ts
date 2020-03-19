import { Component, Input, ViewChild, ElementRef, Inject } from "@angular/core";
import { JQ_TOKEN } from './jquery.service';

// declare var $: any;

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
    @Input() closeOnBodyClick:string;
    @ViewChild('modalContainer') containerEl:ElementRef;

    constructor(@Inject(JQ_TOKEN) private $:any){}

    closeModel(){
        if (this.closeOnBodyClick.toLowerCase() === 'true') {
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    }
}