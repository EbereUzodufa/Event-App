//This is for our integrated test
import { TestBed, async, ComponentFixture } from "@angular/core/testing"; //These are utility functions we need fo the test
import { DebugElement } from "@angular/core";
import { SessionListComponent } from "./session-list.component";
import { AuthService } from "../../user/auth.service";
import { VoterService } from "./voter.service";
import { ISession } from "../shared/event.model";
import { By } from "@angular/platform-browser";
import { UpvoteComponent } from './upvote.component';
import { CollapsibleWellComponent } from 'src/app/common';
import { DurationPipe } from '../shared';

describe('SessionListComponent', () =>{
    //fixture a wrapper around a component that gives us the access to characteristics that we will never have such as changes and events
    let fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement;
    
    beforeEach(async()=>{
        let mockAuthService = {
            isAuthenticated:()=>true,
            currentUser: {
                userName: 'Ngozi'
            }
        };
        let mockVoterService = {
            userHasVoted:()=>true,
        };

        TestBed.configureTestingModule({
            //This is like the app.module
            imports: [],
            declarations:[
                SessionListComponent,
                UpvoteComponent,
                CollapsibleWellComponent,
                DurationPipe
            ],
            providers:[
                //too avoid http request, we re-assign the services
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService },
            ],
            schemas: []
        })
    });

    beforeEach(()=>{
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe('initial display', ()=>{
        it('should have the correct session title', ()=>{
            component.sessions = [
                {
                    id: 3,
                    name: 'Session 1',
                    presenter: 'presenter liu',
                    abstract: 'abstract',
                    duration: 1,
                    level: 'beginner',
                    voters:['amaka']
                }
            ];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;

            //If the method was ngOnit(), then is mutation runs automatically.
            component.ngOnChanges();
            //Then detect changes
            fixture.detectChanges();

            // console.log(element.querySelector('div[well-title]').textContent);
            // expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
        })
    })
})