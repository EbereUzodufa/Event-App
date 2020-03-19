import { Directive, OnInit, ElementRef, Input, Inject } from "@angular/core";
import { JQ_TOKEN } from './jquery.service';

// declare var $: any;

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
    private el: HTMLElement;
    @Input('modal-trigger') modalId:string;

    constructor(ref:ElementRef, @Inject(JQ_TOKEN) private $ : any){
        this.el = ref.nativeElement;
    }

    ngOnInit(){
        this.el.addEventListener('click', e=>{
            // alert('sd');
            this.$(`#${this.modalId}`).modal('show');
        })
    }
}