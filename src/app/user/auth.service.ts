import { Injectable } from '@angular/core';
import { IUSer } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
    currentUser: IUSer;

    constructor(private http: HttpClient) {}

    loginUser(userName: string, password: string) {
        const loginInfo = {username: userName, password: password};
        const options = {
            headers: new HttpHeaders({
             'Content-type': 'application-json'
            })
        };

        return this.http.post('/api/login', loginInfo, options)
            .pipe(tap(data => {
                this.currentUser = <IUSer>data;
            }))
            .pipe(catchError(err => {
                return of(false);
            }));
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        return this.http.get('/api/currentIdentity')
            .pipe(tap(data => {
                console.log('check Auth', data);
                if (data instanceof Object) {
                    this.currentUser = <IUSer>data;
                }
            }))
            .subscribe();
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    logout() {
        this.currentUser = undefined;

        const options = {
            headers: new HttpHeaders({
             'Content-type': 'application-json'
            })
        };
        return this.http.post('/api/logout', {}, options);
    }
}
