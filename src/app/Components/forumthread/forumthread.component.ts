import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';
declare var $: any;

@Component({
  selector: 'app-forumthread',
  templateUrl: './forumthread.component.html',
  styleUrls: ['./forumthread.component.css']
})
export class ForumthreadComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    $( () => {
        $(window).scroll(() => {
            const scroll = $(window).scrollTop(); // how many pixels you've scrolled
            const os = $('#T_Container').offset().top; // pixels to the top of div1
            const ht = $('#T_Container').height(); // height of div1 in pixels
            // if you've scrolled further than the top of div1 plus it's height
            // change the color. either by adding a class or setting a css property
            if (scroll > os + ht) {
                $('#T_Container').addClass('threadNot');
                $('#T_Container').removeClass('T_Container');
            } else if (scroll < ht) {
              $('#T_Container').addClass('T_Container');
              $('#T_Container').removeClass('threadNot');
            }
        });
    });
  }
}


