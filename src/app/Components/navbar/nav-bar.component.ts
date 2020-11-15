import { Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  constructor(private authService: AuthService) {}
  @Output() public sidenavToggle = new EventEmitter();

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe( user => {
      this.isAuthenticated = !!user;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {

  }

}
