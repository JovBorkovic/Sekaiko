import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import * as j from "jquery";
import { AuthService } from './Components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Sekaiko';
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService) {}


  ngOnInit() {
    if(localStorage.getItem("sekaikoData")){
      this.authService.autoAuthUser();
      this.userSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
        this.isAuthenticated = !!authStatus;
      });
    }
  }

  onSidenavClose() {
  }


  ngAfterViewInit() {
    this.stretchParallax();
  }

  stretchParallax() {
    j().ready(() => {
        function StretchFullScreen(CheckIn, LookForClass) {
        const container = CheckIn; /*set local variable to Container to check*/
        const cClass = LookForClass; /*set local variable to Class to look for in the container*/
        if (container.hasClass(cClass)) {
            container.removeClass(cClass);
        } else {
            container.addClass(cClass); // adds class stretch to parallax.
        }
        }
        // DoubleClick event for "parallax-container"
        j(".parallax-container").dblclick(() => {
          // invoke function StretchFullScreen(CheckIn, LookForClass);
          StretchFullScreen(j(".parallax-container"), "stretch");
        });
    });
  }

  logOut() {
    this.isAuthenticated = false;
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }


}
