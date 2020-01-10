import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISession } from '../shared';

@Component({
    templateUrl: './create-session.component.html',
    styleUrls: ['./create-session.component.css']
})

export class CreateSessionComponent implements OnInit{
    sessionForm:FormGroup;
    sessionName: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    constructor(private router: Router){

    }

    ngOnInit(){
        this.sessionName  = new FormControl('', Validators.required);
        this.presenter  = new FormControl('', Validators.required);
        this.duration  = new FormControl('', Validators.required);
        this.level  = new FormControl('', Validators.required);
        this.abstract  = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords]);

        this.sessionForm = new FormGroup({
            sessionName: this.sessionName,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
        })
    }

    private restrictedWords (control: FormControl):{[key: string]:any}{
        return control.value.includes('foo') 
            ? {'restrictedWords':'foo'}
            : null
    }

    saveSession(formValue){
        // console.log(formValue);
        let session:ISession = {
            id: undefined,
            name: formValue.sessionName,
            duration: +formValue.duration,
            level: formValue.level,
            presenter: formValue.presenter,
            abstract: formValue.abstract,
            voters: []
        }
        console.log(session);
    }

    cancel(){
        this.router.navigate(['/events']);
    }
}