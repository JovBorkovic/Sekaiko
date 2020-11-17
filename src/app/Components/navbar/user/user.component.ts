import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { AuthData } from '../../auth/authData.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @Input() isAuthenticated;
  @Output() isLoggingOut = new EventEmitter();
  username: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnChanges() {
  }

  ngOnInit() {
    this.isAuthenticated = this.authService.getIsAuth();
    this.username = this.authService.getUsername();
  }
  

  ngAfterViewInit(): void {
  }

  goMyHome(){
    this.router.navigate(['/acc-home', this.authService.getUserId(), this.authService.getUsername() ]
    // , {queryParams: { id: this.authService.getUserId() }}
    );
  }

  emitLogout() {
    this.username = null;
    this.isLoggingOut.emit();
  }

  ngOnDestroy(): void {
  }

}
