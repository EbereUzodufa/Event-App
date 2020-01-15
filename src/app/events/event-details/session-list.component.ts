import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../shared';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges{
    @Input() sessions:ISession[];
    @Input() filterBy:string;
    @Input() sortBy:string;
    visibleSessions:ISession[] = [];

    ngOnChanges() {
       if (this.sessions) {
           this.filterSessions(this.filterBy); //This helps make filterSessions stateless since we ca=ould easily have created a fn with no parameter but we need to monitor changes on filterBy
           (this.sortBy === 'name') ? this.visibleSessions.sort(sortNameAsc) : this.visibleSessions.sort(sortVotesDes)
       }
    }

    filterSessions(filterBy: string) {
        if (filterBy === 'all') {
            this.visibleSessions = this.sessions.slice(0); //This make a new array not a clone
        } else{
            this.visibleSessions = this.sessions.filter(s=>s.level.toLowerCase() === filterBy);
        }
    }
}


function sortNameAsc(s1:ISession, s2:ISession){
    if(s1.name > s2.name) return 1
    else if (s1.name === s2.name) return 0
    else return -1
}

function sortVotesDes(s1:ISession, s2:ISession){
    return s2.voters.length - s1.voters.length;
}