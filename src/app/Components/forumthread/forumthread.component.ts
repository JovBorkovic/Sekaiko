import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-forumthread',
  templateUrl: './forumthread.component.html',
  styleUrls: ['./forumthread.component.css']
})
export class ForumthreadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  ngAfterViewInit() {
    
    $().ready(function(){
        
        
        $.fn.isOnScreen = function(){
        
            let win = $(window);
    
            let viewport = {
                top : win.scrollTop(),
                left : win.scrollLeft(),
                right: win,
                bottom: win
            };
            viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();
    
            let bounds = this.offset();
            bounds.right = bounds.left + this.outerWidth();
            bounds.bottom = bounds.top + this.outerHeight();
    
            return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
        };
    
        let T_Container = $('#T_Container');
        
        
        $(window).scroll(function () {
            if ($(window).width() > 1024){
                if($('.T_Container').length > 0) {
                    if ($('.T_Container').isOnScreen() === false){
                        T_Container.addClass('threadNot');
                        T_Container.removeClass('T_Container');
                    }
                }
                if($('.threadNot').length > 0) {
                    if ($(window).scrollTop() <= 64){
                        T_Container.removeClass('threadNot');
                        T_Container.addClass('T_Container');
                    }
                }
            }
            else {
                T_Container.removeClass('T_Container');
                T_Container.removeClass('threadNot');
                T_Container.addClass('T_Container');
            }
    
        });
        
        
    });
  }
}


