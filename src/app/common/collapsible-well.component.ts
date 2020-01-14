import { Component, Input } from "@angular/core";

@Component({
    selector: 'component-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4>
            <ng-content select="[well-title]"></ng-content>
        </h4>
        <ng-content *ngIf="visibleSection" select="[well-body]"></ng-content>
    </div>
    `
})

export class CollapsibleWellComponent{
    // @Input() title: string;
    visibleSection: boolean = true;

    toggleContent(){
        this.visibleSection = !this.visibleSection;
    }
}