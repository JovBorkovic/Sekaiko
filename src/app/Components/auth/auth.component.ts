import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { Subscription } from "rxjs";
import { AuthService } from "./auth.service";


@Component({
    selector: 'app-auth-component',
    templateUrl: './auth.component.html'
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
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe( authStatus => {
            this.isLoading = false;
        });
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
          return;
        }
    
        this.isLoading = true;
        if (this.isLoginMode) {
            this.authService.login(form.value.email, form.value.password);
        } else {
            this.isLoading = true;
            this.authService.createUser(form.value.email, form.value.password);
        }

        
        this.isLoading = false;
        form.reset();
    }


    
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
}
 