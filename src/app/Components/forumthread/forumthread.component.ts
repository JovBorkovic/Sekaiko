import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';
declare var $: any;

@Component({
  selector: 'app-forumthread',
  templateUrl: './forumthread.component.html',
  styleUrls: ['./forumthread.component.css']
})
export class ForumthreadComponent implements OnInit , AfterViewInit{

  constructor() {}

  ngOnInit() {
    }

    ngAfterViewInit() {
        $().ready(() => {
            $.fn.isOnScreen = () => {
                const win = $(window);
                const viewport = {
                    top : win.scrollTop(),
                    left : win.scrollLeft(),
                    right: win,
                    bottom: win
                };
                viewport.right = viewport.left + win.width();
                viewport.bottom = viewport.top + win.height();
                const bounds = globalThis.offset();
                bounds.right = bounds.left + globalThis.outerWidth;
                bounds.bottom = bounds.top + globalThis.outerHeight;
                return (!(viewport.right < bounds.left
                    || viewport.left > bounds.right
                    || viewport.bottom < bounds.top
                    || viewport.top > bounds.bottom));
            };
            const TContainer = $('#T_Container');
            $(window).scroll(() => {
                if ($(window).width() > 1024) {
                    if ($('.T_Container').length > 0) {
                        if ($('.T_Container').isOnScreen() === false) {
                            TContainer.addClass('threadNot');
                            TContainer.removeClass('T_Container');
                        }
                    }
                    if ($('.threadNot').length > 0) {
                        if ($(window).scrollTop() <= 64) {
                            TContainer.removeClass('threadNot');
                            TContainer.addClass('T_Container');
                        }
                    }
                } else {
                    TContainer.removeClass('T_Container');
                    TContainer.removeClass('threadNot');
                    TContainer.addClass('T_Container');
                }
            });
        });
    }
}


