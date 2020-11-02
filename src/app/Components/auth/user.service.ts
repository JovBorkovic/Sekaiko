import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError , tap} from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';

import { User } from './user.model';
import { Router } from '@angular/router';

export interface UserResponseData {
    
  }

@Injectable({ providedIn: 'root' })
export class UserService {
    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router) {}



    login(email: string, password: string) {
        // tslint:disable-next-line:max-line-length
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDKX5HA35NvN9W0ZxJPF8Q1BB_1O3vOVkY',
            {
                email: email,
                password: password,
                returnSecureToken: true,
            }).pipe(catchError(this.handleError),
                tap(resData => {
                    this.handleAuthentication(
                    resData.email,
                    resData.localId,
                    resData.idToken,
                    +resData.expiresIn
                    );
            }));
    }

    getUser(id: string, username?: string){
        return this.http.post<User[]>('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDKX5HA35NvN9W0ZxJPF8Q1BB_1O3vOVkY')
    }

}
