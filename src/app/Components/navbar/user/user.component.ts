import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  isAuthenticated = false;
  username = "Unknown";
  id: string;
  @Output() isLoggingOut = new EventEmitter();
  userSubs: Subscription;
  user: User;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnChanges() {
  }

  ngOnInit() {
    this.userSubs = this.authService.user.subscribe(user => {
      if(user){
        this.username = user.username;
        this.id = user.id;
      }
      this.isAuthenticated = !!user;
    });
  }
  

  ngAfterViewInit(): void {
    
  }

  goMyHome(){
    this.router.navigate(['/acc-home', this.id, this.username ]
    // , {queryParams: { id: this.authService.getUserId() }}
    );
  }

  emitLogout() {
    this.username = "";
    this.isAuthenticated = false;
    this.isLoggingOut.emit();
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }

}
