import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-acc-home',
  templateUrl: './acc-home.component.html',
  styleUrls: ['./acc-home.component.css']
})
export class AccHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //Checks to see if the document is loaded before running code
  $().ready(function(){
      

      
    //=============================        Parallax Stretch Animation Trigger
        
        function StretchFullScreen(CheckIn, LookForClass) {
            let container = CheckIn;//set local variable to Container to check
            let _class = LookForClass;//set local variable to Class to look for in the container
            
            //checks to see if CheckIn has class LookForClass.
            if(container.hasClass(_class)){
                //if it does...
                //this code is executed.
                container.removeClass(_class);
            }
            //if it does not then run this code...
            else {
                container.addClass(_class);//adds class stretch to parallax.
            }
        };
        
        
        //DoubleClick event for "parallax-container"
        $('.parallax-container').dblclick(function(){
            //invoke function StretchFullScreen(CheckIn, LookForClass);
            StretchFullScreen($('.parallax-container'), 'stretch');
        });
    
    
    
    //=============================           Tab button trigger 
    //----------------  Click event for tabs (Desktop)
        $('.tab-links > .tab').click(
        //Function for desktop tabs
        //variable that holds a function
            function tabs() {
                //variable that hold the 'this' 'data-tab' information
                //the 'this' which in this case is the current '.tab' that was clicked
                var tab_id = $(this).attr('data-tab');
                
                //removes the class 'current' from all elements with a '.tab' class
                $('.tab-links > .tab').removeClass('current');
                //removes the class 'current' from all elements with a '.tab-content' class
                $('.tab-content').removeClass('current');
    
                //adds a class '.current' to the 'this'
                //in this case the 'this' is the '.tab' container that was clicked
                $(this).addClass('current');
                //adds a class '.current' to the id container that matches the 'this' 'data-tab' value
                $("#"+tab_id).addClass('current');
            }
        );
    
    //----------------  Click event for tabs (Mobile) 
        $('.tabs-mobile > .tab').click(
        //Function for mobile tabs
        //variable that holds a function
            function tabsMobile() {
                //variable that hold the 'this' 'data-tab' information
                //the 'this' which in this case is the current '.tab' that was clicked
                var tab_id = $(this).attr('data-tab');
                
                //removes the class 'current' from all elements with a '.tab' class
                $('.tabs-mobile > .tab').removeClass('current');
                //removes the class 'current' from all elements with a '.tab-content' class
                $('.tab-content').removeClass('current');
    
                //adds a class '.current' to the 'this'
                //in this case the 'this' is the '.tab' container that was clicked
                $(this).addClass('current');
                //adds a class '.current' to the id container that matches the 'this' 'data-tab' value
                $("#"+tab_id).addClass('current');
            }
        );
        
        
    //============================            Tab mobile
    
        (function() {
            var winIsSmall= $(window).width() <= 768;
    
            if (winIsSmall) {
                $('.tabs-mobile').show();
                $('.tab-links').hide();
            }
            
            else {
                $('.tab-links').show();
                $('.tabs-mobile').hide();
            }
        })();
    
    
    
        $( window ).resize(function() {
            var winIsSmall= $(window).width() <= 768;
    
            if (winIsSmall) {
                $('.tab-links').hide();
                $('.tabs-mobile').show();
            }
            
            else {
                $('.tab-links').show();
                $('.tabs-mobile').hide();
            }
        });
        
    });
    }

}
