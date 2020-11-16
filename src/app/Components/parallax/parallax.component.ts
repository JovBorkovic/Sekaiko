import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  //TODO:  Implement when parllax is moved here

  // stretchParallax() {
  
    // j().ready(() => {
    
    //     function StretchFullScreen(CheckIn, LookForClass) {
    //     const container = CheckIn; /*set local variable to Container to check*/
    //     const cClass = LookForClass; /*set local variable to Class to look for in the container*/
    //     if (container.hasClass(cClass)) {
    //         container.removeClass(cClass);
    //     } else {
    //         container.addClass(cClass); // adds class stretch to parallax.
    //     }
    //     }
    //     // DoubleClick event for "parallax-container"
    //     j(".parallax-container").dblclick(() => {
    //     // invoke function StretchFullScreen(CheckIn, LookForClass);
    //     StretchFullScreen(j(".parallax-container"), "stretch");
    //     });
    // });
  // }

}
