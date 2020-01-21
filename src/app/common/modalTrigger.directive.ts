import { Directive, OnInit, ElementRef, Input } from "@angular/core";

declare var $: any;

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
    private el: HTMLElement;
    @Input('modal-trigger') modalId:string;

    constructor(ref:ElementRef){
        this.el = ref.nativeElement;
    }

    ngOnInit(){
        this.el.addEventListener('click', e=>{
            // alert('sd');
            $(`#${this.modalId}`).modal('show');
        })
    }
}