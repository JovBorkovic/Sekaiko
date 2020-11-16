import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthData } from "./authData.model";

import { environment} from "../../../environments/environment";

const BACKEND_URL = environment.apiURL + "/user/"

@Injectable({providedIn: 'root'})
export class AuthService {
    private isAuthenticated = false;
    private token:string;
    private tokenTimer: any;
    private userId: string;
    private username: string;
    private authStatusListener = new Subject<boolean>();

    constructor(private http: HttpClient, private router: Router){}
    

    getToken() {
        return this.token;
    }

    getIsAuth() {
        return this.isAuthenticated;
    }

    getUserId() {
        return this.userId;
    }
    
    getUsername() {
        return this.username;
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    createUser(email: string, username: string, password: string) {
        const authData: AuthData = {email: email, username: username, password: password};
         return this.http.post( BACKEND_URL + "signup", authData)
            .subscribe( () => {
                this.router.navigate["/auth"];
            }, error => {
                this.authStatusListener.next(false);
            });
    }

    //username is just placeholder. Will not function
    login(email: string, username: string, password: string) {
        const authData: AuthData = {email: email, username: username, password: password};
        this.http.post<{token: string, expiresIn: number, userId: string, username: string}>(BACKEND_URL +  "/login", authData)
            .subscribe( response => {
                const token = response.token;
                this.token = token;
                if(token) {
                    const expiresInDuration = response.expiresIn;
                    this.setAuthTimer(expiresInDuration);
                    this.isAuthenticated = true;
                    this.userId = response.userId;
                    this.username = response.username;
                    this.authStatusListener.next(true);
                    const now = new Date();
                    const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                    console.log(expirationDate);
                    this.saveAuthData(token, expirationDate, this.userId, this.username);
                    this.router.navigate(['/']);
                }
            }, error => {
                this.authStatusListener.next(false);
            });
    }

    autoAuthUser() {
        const authInformation = this.getAuthData();
        if(!authInformation){
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if(expiresIn > 0 ){
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.username = authInformation.username;
            this.authStatusListener.next(true);
            this.setAuthTimer(expiresIn/1000);
        }
    }

    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.userId = null;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    }

    private setAuthTimer(duration: number) {
        console.log('setting timer: ' + duration);
        this.tokenTimer = setTimeout(() => {
            this.logout()
        }, duration * 1000);
    }

    private saveAuthData(token: string, expirationDate: Date, userId: string, username: string) {
        const sekaikoData = {
            token: token,
            expiration: expirationDate,
            userId: userId,
            username: username
        } 
        localStorage.setItem('sekaikoData', JSON.stringify(sekaikoData));

        // localStorage.setItem('token', token);
        // localStorage.setItem('expiration', expirationDate.toISOString());
        // localStorage.setItem('userId', userId);
        // localStorage.setItem('username', username);
    }

    private  clearAuthData(){
        localStorage.removeItem('sekaikoData');
    }

    private getAuthData(){
        const sekaikoData = JSON.parse(localStorage.getItem('sekaikoData'));

        const token = sekaikoData.token;
        const expirationDate = sekaikoData.expiration;
        const userId = sekaikoData.userId;
        const username = sekaikoData.username;
        if(!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId,
            username: username
        }
    }

}