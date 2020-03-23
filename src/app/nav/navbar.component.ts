import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService, ISession } from '../events';

@Component({
    selector: 'navBar',
    templateUrl: './navbar.component.html',
    styles: [
        `
        .nav.navbar-nav {font-size: 15px;}
        li > a.active {color: #F97824}
        #searchForm {margin-right: 100px;}
        .modal{display: block !important}
        @media (max-width: 1200px) {#searchForm{display: none}}
        `
    ]
})

export class NavBarComponent {
    searchTerm: string;
    foundSessions: any[] = [];
    constructor(public auth: AuthService, private eventService: EventService) {

    }

    searchSession(term: string) {
        // console.log('serach term', term);
        if (term) {
            this.eventService.searchSession(term).subscribe(
                session => {
                    this.foundSessions = session;
                    console.log('found events', this.foundSessions);
                }
            );
        }
    }

    clearSearch() {
        this.searchTerm = '';
    }
}
