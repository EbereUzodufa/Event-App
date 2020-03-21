import { Injectable } from "@angular/core";
import { IUSer } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService{
    currentUser: IUSer;

    constructor(private http: HttpClient){}

    loginUser(userName: string, password: string){
        let loginInfo = {username: userName, password: password};
        const options = {
            headers: new HttpHeaders({
             'Content-type': 'application-json'
            })
        }

        return this.http.post('/api/login',loginInfo, options)
            .pipe(tap(data=>{
                this.currentUser = <IUSer>data;
            }))
            .pipe(catchError(err=>{
                return of(false);
            }))
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}