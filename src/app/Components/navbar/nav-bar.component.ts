import { Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;
  constructor(private authService: AuthService) {}
  @Output() public sidenavToggle = new EventEmitter();
  @Output() loggingOut = new EventEmitter();

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  ngOnInit() {
    if(localStorage.getItem("sekaikoData")){
      this.authService.autoLogin();
    }
    
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user; //same as !user ? false: true;
    });
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    
  }

  onLogout() {
    this.loggingOut.emit();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
