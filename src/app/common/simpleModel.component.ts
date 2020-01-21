import { Component, Input, ViewChild, ElementRef } from "@angular/core";

declare var $: any;

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

    closeModel(){
        if (this.closeOnBodyClick.toLowerCase() === 'true') {
            $(this.containerEl.nativeElement).modal('hide');
        }
    }
}