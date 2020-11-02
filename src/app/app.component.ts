import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as j from 'jquery';
import { AuthService } from './Components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Sekaiko';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoLogin();
  }


  ngAfterViewInit() {
    j().ready(() => {
      function StretchFullScreen(CheckIn, LookForClass) {
          const container = CheckIn; /*set local variable to Container to check*/
          const cClass = LookForClass; /*set local variable to Class to look for in the container*/
          if (container.hasClass(cClass)) {
              container.removeClass(cClass);
          }  else {
              container.addClass(cClass); // adds class stretch to parallax.
          }
      }
      // DoubleClick event for "parallax-container"
      j('.parallax-container').dblclick(() => {
          // invoke function StretchFullScreen(CheckIn, LookForClass);
          StretchFullScreen(j('.parallax-container'), 'stretch');
      });
  // =============================           Tab button trigger
  // ----------------  Click event for tabs (Desktop)
      j('.tab-links > .tab').click(
      // Function for desktop tabs
          function tabs() {
              const tabId = j(this).attr('data-tab');
              j('.tab-links > .tab').removeClass('current');
              j('.tab-content').removeClass('current');
              j(this).addClass('current');
              j('#' + tabId).addClass('current');
          }
      );
  // ----------------  Click event for tabs (Mobile)
      j('.tabs-mobile > .tab').click(
      // Function for mobile tabs
          function tabsMobile() {
              const tabId = j(this).attr('data-tab');
              j('.tabs-mobile > .tab').removeClass('current');
              j('.tab-content').removeClass('current');
              j(this).addClass('current');
              j('#' + tabId).addClass('current');
          }
      );
  // ============================            Tab mobile
      (() => {
          const winIsSmall = j(window).width() <= 768;
          if (winIsSmall) {
              j('.tabs-mobile').show();
              j('.tab-links').hide();
          } else {
              j('.tab-links').show();
              j('.tabs-mobile').hide();
          }
      })();
      j( window ).resize(() => {
          const winIsSmall = j(window).width() <= 768;
          if (winIsSmall) {
              j('.tab-links').hide();
              j('.tabs-mobile').show();
          } else {
              j('.tab-links').show();
              j('.tabs-mobile').hide();
          }
      });
    });
  }
}
