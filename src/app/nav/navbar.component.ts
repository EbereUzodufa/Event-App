import { Component } from "@angular/core";
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'navBar',
    templateUrl: "./navbar.component.html",
    styles:[
        `
        .nav.navbar-nav {font-size: 15px;}
        li > a.active {color: #F97824}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm{display: none}}
        `
    ]
})

export class NavBarComponent{
    constructor(private auth: AuthService){

    }
}