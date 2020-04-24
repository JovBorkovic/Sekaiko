import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';
declare var $: any;

@Component({
  selector: 'app-acc-home',
  templateUrl: './acc-home.component.html',
  styleUrls: ['./acc-home.component.css']
})
export class AccHomeComponent implements OnInit, AfterViewInit{

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  $().ready(() => {
        function StretchFullScreen(CheckIn, LookForClass) {
            const container = CheckIn; /*set local variable to Container to check*/
            const cClass = LookForClass; /*set local variable to Class to look for in the container*/
            // checks to see if CheckIn has class LookForClass.
            if (container.hasClass(cClass)) {
                // if it does...
                // this code is executed.
                container.removeClass(cClass);
            } /* if it does not then run this code...*/ else {
                container.addClass(cClass); // adds class stretch to parallax.
            }
        }
        // DoubleClick event for "parallax-container"
        $('.parallax-container').dblclick(() => {
            // invoke function StretchFullScreen(CheckIn, LookForClass);
            StretchFullScreen($('.parallax-container'), 'stretch');
        });
    // =============================           Tab button trigger
    // ----------------  Click event for tabs (Desktop)
        $('.tab-links > .tab').click(
        // Function for desktop tabs
        // variable that holds a function
            function tabs() {
                // variable that hold the 'this' 'data-tab' information
                // the 'this' which in this case is the current '.tab' that was clicked
                const tabId = $(this).attr('data-tab');
                // removes the class 'current' from all elements with a '.tab' class
                $('.tab-links > .tab').removeClass('current');
                // removes the class 'current' from all elements with a '.tab-content' class
                $('.tab-content').removeClass('current');
                // adds a class '.current' to the 'this'
                // in this case the 'this' is the '.tab' container that was clicked
                $(this).addClass('current');
                // adds a class '.current' to the id container that matches the 'this' 'data-tab' value
                $('#' + tabId).addClass('current');
            }
        );
    // ----------------  Click event for tabs (Mobile)
        $('.tabs-mobile > .tab').click(
        // Function for mobile tabs
        // variable that holds a function
            function tabsMobile() {
                // variable that hold the 'this' 'data-tab' information
                // the 'this' which in this case is the current '.tab' that was clicked
                const tabId = $(this).attr('data-tab');
                // removes the class 'current' from all elements with a '.tab' class
                $('.tabs-mobile > .tab').removeClass('current');
                // removes the class 'current' from all elements with a '.tab-content' class
                $('.tab-content').removeClass('current');
                // adds a class '.current' to the 'this'
                // in this case the 'this' is the '.tab' container that was clicked
                $(this).addClass('current');
                // adds a class '.current' to the id container that matches the 'this' 'data-tab' value
                $('#' + tabId).addClass('current');
            }
        );
    // ============================            Tab mobile
        (() => {
            const winIsSmall = $(window).width() <= 768;
            if (winIsSmall) {
                $('.tabs-mobile').show();
                $('.tab-links').hide();
            } else {
                $('.tab-links').show();
                $('.tabs-mobile').hide();
            }
        })();
        $( window ).resize(() => {
            const winIsSmall = $(window).width() <= 768;
            if (winIsSmall) {
                $('.tab-links').hide();
                $('.tabs-mobile').show();
            } else {
                $('.tab-links').show();
                $('.tabs-mobile').hide();
            }
        });
    });
    }

}
