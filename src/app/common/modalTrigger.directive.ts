import { Directive, OnInit, ElementRef } from "@angular/core";

declare var $: any;

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
    private el: HTMLElement;

    constructor(ref:ElementRef){
        this.el = ref.nativeElement;
    }

    ngOnInit(){
        this.el.addEventListener('click', e=>{
            // alert('sd');
            $('#simple-modal').modal('toggle');
        })
    }
}