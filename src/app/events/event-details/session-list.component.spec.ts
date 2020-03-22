//Here we write an isolated test to test for components

//First we import the classes we need
import { SessionListComponent } from "./session-list.component";
import { ISession } from "../shared/event.model";

describe('SessionListComponent', ()=>{
    let component: SessionListComponent; //We declare our component
    let mockAuthService, mockVoterService; //This is because SessionListComponent has two services in its component => AuthService and VoterService

    beforeEach(()=>{
        component = new SessionListComponent(mockAuthService, mockVoterService); //declares component with her component services
    });

    //Testing ngOnChanges
    describe('ngOnChanges', ()=>{
        it('should filter the sessions correctly', ()=>{
            //Always cast<> to ensure data integrity
            component.sessions = <ISession[]>[
                {name: 'session 1', level: 'intermediate'},
                {name: 'session 2', level: 'intermediate'},
                {name: 'session 3', level: 'beginner'}
            ];
            component.filterBy = 'intermediate';
            component.sortBy = 'name'; //Declares to avoid error
            component.eventId = 3; //Declares to avoid error

            component.ngOnChanges(); //This calls the method. Note the method is called by default in production, but in test, we have to call it this way. Then this mutates the value and adds value for visibleSessions

            expect(component.visibleSessions.length).toBe(2);
        });

        it('should sort the sessions correctly', ()=>{
            //Always cast<> to ensure data integrity
            component.sessions = <ISession[]>[
                {name: 'session 1', level: 'intermediate'},
                {name: 'session 3', level: 'intermediate'},
                {name: 'session 2', level: 'beginner'}
            ];
            component.filterBy = 'all';
            component.sortBy = 'name'; //Declares to avoid error
            component.eventId = 3; //Declares to avoid error

            component.ngOnChanges(); //This calls the method. Note the method is called by default in production, but in test, we have to call it this way. Then this mutates the value and adds value for visibleSessions

            expect(component.visibleSessions[2].name).toBe('session 3');
        })
    })
})