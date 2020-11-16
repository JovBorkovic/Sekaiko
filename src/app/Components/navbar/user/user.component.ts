import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { AuthData } from '../../auth/authData.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() isAuthenticated: boolean;
  private userSub: Subscription;
  @Output() isLoggingOut = new EventEmitter();
  username: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  

  ngAfterViewInit(): void {
    this.username = this.authService.getUsername();
  }

  emitLogout() {
    this.isLoggingOut.emit();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    
  }

}
