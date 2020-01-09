import { Injectable } from "@angular/core";
import { IUSer } from './user.model';

@Injectable()
export class AuthService{
    currentUser: IUSer;
    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            firstName: 'John',
            lastName: 'Papa',
            userName: userName
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }
}