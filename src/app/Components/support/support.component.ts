import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';
declare var $: any;

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    $(document).ready( () => {

      // CODE NOW WORKING!
      const formEvent = function(){
          const complaintForm   =   $('#complaintForm');
          const suggestionForm  =   $('#suggestionForm');
          const supportForm    =   $('#supportForm');
          const current = $(this);

          console.log(current);
          current.toggleClass('current');

          if ($(this).attr('id') === 'complaintEmail' ) {
              $('#suggestionEmail').removeClass('current');
              $('#supportEmail').removeClass('current');
              if (supportForm.hasClass('hide') && suggestionForm.hasClass('hide')) {
                  complaintForm.toggleClass('hide');
              } else {
                  supportForm.removeClass('hide').addClass('hide');
                  suggestionForm.removeClass('hide').addClass('hide');
                  complaintForm.toggleClass('hide');
              }
          }

          if ($(this).attr('id') === 'suggestionEmail' ){
              $('#supportEmail').removeClass('current');
              $('#complaintEmail').removeClass('current');

              if (supportForm.hasClass('hide') && complaintForm.hasClass('hide')){
                  suggestionForm.toggleClass('hide');
              } else {
                  supportForm.removeClass('hide').addClass('hide');
                  complaintForm.removeClass('hide').addClass('hide');
                  suggestionForm.toggleClass('hide');
              }
          }

          if ($(this).attr('id') === 'supportEmail' ){
              $('#suggestionEmail').removeClass('current');
              $('#complaintEmail').removeClass('current');

              if (suggestionForm.hasClass('hide') && complaintForm.hasClass('hide')) {
                  supportForm.toggleClass('hide');
              } else {
                  suggestionForm.removeClass('hide').addClass('hide');
                  complaintForm.removeClass('hide').addClass('hide');
                  supportForm.toggleClass('hide');
              }
          }
          console.log(supportForm.attr('class'));
      };

      $('#supportEmail').click(formEvent);
      $('#suggestionEmail').click(formEvent);
      $('#complaintEmail').click(formEvent);
  });
  }

}
