import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";


@Component({
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
}) export class SignUpComponent implements OnInit , OnDestroy{
    isLoading = false;
    private authStatusSub: Subscription;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe( authStatus => {
            this.isLoading = authStatus;
        });
    }

    onSignUp(form: NgForm) {
        if(form.invalid){
            return;
        }
        this.isLoading = true;
        this.authService.createUser(form.value.email, form.value.password);
    }

    ngOnDestroy () {
        this.authStatusSub.unsubscribe();
    }
}