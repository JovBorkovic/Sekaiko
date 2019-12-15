import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, Option);
    });
  
    // Or with jQuery
  
    $(document).ready(function(){
      $('.modal').modal();
    });

  }
}
