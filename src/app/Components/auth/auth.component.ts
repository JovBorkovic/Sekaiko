import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable, Subscription } from "rxjs";
import { AuthService, ResponseData } from "./auth.service";


@Component({
    selector: 'app-auth-component',
    templateUrl: './auth.component.html',
    styles: [' mat-form-field { margin: auto; width: 100%;}', '  mat-spinner { width: auto; } ' ]
}) export class AuthComponent implements OnInit, OnDestroy{
    isLoading = false;
    isLoginMode = true;
    error: string = null;
    private authStatusSub: Subscription;

    constructor(private authService: AuthService, private router: Router) {}


    
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onHandleError() {
        this.error = null;
    }

    ngOnInit() {
        this.authStatusSub = this.authService.user.subscribe( user => {
            this.isLoading = !!user;
        });
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
          return;
        }

        let authObs: Observable<ResponseData>;
    
        this.isLoading = true;
        if (this.isLoginMode) {
            this.isLoading = true;
            authObs = this.authService.login(form.value.email, null, form.value.password);
        } else {
            this.isLoading = true;
            authObs = this.authService.createUser(form.value.email, form.value.username, form.value.password);
        }

        authObs.subscribe( () => {
            this.router.navigate["/"];
        }, error => {
            this.isLoading = false;
        });
        

        
        this.isLoading = false;
        form.reset();
    }


    
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
}
 