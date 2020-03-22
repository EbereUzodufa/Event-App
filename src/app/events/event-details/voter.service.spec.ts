//Here we test the voter service
import { VoterService } from "./voter.service";
import { ISession } from "../shared/event.model";
import { Observable, of } from 'rxjs';

//Testing voterService
describe('VoterService', ()=>{
    let voterService:VoterService, 
        mockHttp;
    
    beforeEach(()=>{
        //With this, teh values here are not mutated in the next test.

        //We use jasmine.createSpyObj to create methods on the mockHttp. These method is based on the http calls we made in the voterService=> the post and delete http calls/method
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp)
    });

    //Testing deleteVoter fn
    describe('deleteVoter', ()=>{
        it('should remove the voter from the list of voters', ()=>{
            let session = {
                id: 6,
                voters: ['ngozi', 'amaka']
            };

            //Here we use 'of' to make an Observable for http return before pipe in the actual service
            mockHttp.delete.and.returnValue(of(false));

            //Uses ISession to cast the value of session and maintain data integrity
            voterService.deleteVoter(3, <ISession>session, "amaka");

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('ngozi');
            expect(session.voters).toEqual(['ngozi']); //This is not necessary; I'm just practicing
            //NB---> toBe() versus toEqual(): toEqual() checks equivalence. toBe(), on the other hand, makes sure that they're the exact same object.
        });

        it('should call http.delete with the right URL', ()=>{
            let session = {
                id: 6,
                voters: ['ngozi', 'amaka']
            };
            mockHttp.delete.and.returnValue(of(false));
            voterService.deleteVoter(3, <ISession>session, "amaka");

            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/amaka');
        })
    })
})