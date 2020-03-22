import { Component } from "@angular/core";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styles:[`
        em{
            float: right;
            color: #E05C65;
            padding-left: 10px;
        }
    `]
})

export class LoginComponent{
    userName;
    password;
    mouseoverLogin;
    loginInvalid:boolean = false;
    
    constructor(private authService:AuthService, private router: Router){

    }

    login(formValues){
        // console.log(formValues);
        this.authService.loginUser(formValues.userName, formValues.password).subscribe(resp=>{
            console.log('resp login', resp);
            if (resp) {
                this.router.navigate(['events']);
            } else{
                this.loginInvalid = true;
            }
        });
    }

    cancel(){
        this.router.navigate(['events']);
    }
}