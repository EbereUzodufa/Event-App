import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    @Input() eventId: number;
    visibleSessions: ISession[] = [];

    constructor(public authService: AuthService, private voterService: VoterService) {}

    ngOnChanges() {
       if (this.sessions) {
           this.filterSessions(this.filterBy);
           // This helps make filterSessions stateless since we could easily have created
           // a fn with no parameter but we need to monitor changes on filterBy
           (this.sortBy === 'name') ? this.visibleSessions.sort(sortNameAsc) : this.visibleSessions.sort(sortVotesDes);
       }
    }

    filterSessions(filterBy: string) {
        if (filterBy === 'all') {
            this.visibleSessions = this.sessions.slice(0); // This make a new array not a clone
        } else {
            this.visibleSessions = this.sessions.filter(s => s.level.toLowerCase() === filterBy);
        }
    }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName);
        } else {
            this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName);
        }

        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(sortVotesDes);
        }
    }

    userHasVoted(session: ISession) {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
    }
}


function sortNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) { return 1; } else if (s1.name === s2.name) { return 0; } else { return -1; }
}

function sortVotesDes(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}
