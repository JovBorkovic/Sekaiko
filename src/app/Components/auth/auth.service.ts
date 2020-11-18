import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject} from "rxjs";
import { tap } from "rxjs/operators";
import { User } from "./user.model";

import { environment} from "../../../environments/environment";


const BACKEND_URL = environment.apiURL + "/user/"

export interface ResponseData {
    userId: string,
    email: string,
    username: string,
    token: string,
    expiresIn: string
}


export interface AuthSentData {
    email: string,
    username: string,
    password: string
};


@Injectable({providedIn: 'root'})
export class AuthService {
    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router){}
    


    createUser(email: string, username: string, password: string) {
        const authData: AuthSentData = { email: email, username: username, password: password};
         return this.http.post<ResponseData>( BACKEND_URL + "signup", authData)
            .pipe(tap({
                next: responseData => {
                    this.handleAuthentication(
                        responseData.email,
                        responseData.userId, 
                        responseData.username,
                        responseData.token, 
                        +responseData.expiresIn
                        );
                }
            }));
    }

    //username is just placeholder. Will not function
    login(email: string, username: string, password: string) {
        const authData: AuthSentData = {email: email, username: username, password: password};
        return this.http.post<ResponseData>(BACKEND_URL +  "/login", authData)
            .pipe(tap({
                next: responseData => {
                    this.handleAuthentication(
                        responseData.email, 
                        responseData.userId, 
                        responseData.username, 
                        responseData.token, 
                        +responseData.expiresIn
                        );
                }
            }));
    }

    handleAuthentication(email: string, userId: string, username: string, token: string, expiresIn: number){
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email , userId, username ,token , expirationDate);
        this.saveAuthData(token, expirationDate, userId, username, email);
        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
    }

    autoLogin() {
        this.getAuthData();
    }

    logout() {
        this.user.next(null);
        clearTimeout(this.tokenExpirationTimer);
        this.router.navigate(['/']);
        this.clearAuthData();
        if(this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    autoLogout(expirationDuration: number) {
        console.log('setting timer: ' + expirationDuration);
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout()
        }, expirationDuration);
    }

    private saveAuthData(token: string, expirationDate: Date, userId: string, username: string, email: string) {
        const sekaikoData = {
            token: token,
            expiration: expirationDate,
            userId: userId,
            username: username,
            email: email
        } 
        localStorage.setItem('sekaikoData', JSON.stringify(sekaikoData));
    }

    private  clearAuthData(){
        localStorage.removeItem('sekaikoData');
    }

    private getAuthData(){
        const sekaikoData :{
            email: string,
            userId: string,
            username: string,
            token: string,
            expiration: Date
        } = JSON.parse(localStorage.getItem('sekaikoData'));
        console.log(sekaikoData.token, sekaikoData.expiration)
        if(!sekaikoData.token || !sekaikoData.expiration) {
            return;
        }

        const newData = new User(
            sekaikoData.email,
            sekaikoData.userId,
            sekaikoData.username,
            sekaikoData.token,
            new Date(sekaikoData.expiration),
        );
        console.log(newData.username);
        
        const now = new Date();
        
        if(newData.token){
            this.user.next(newData);
            const expirationDuration = new Date(sekaikoData.expiration).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }

}