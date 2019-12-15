import { Component } from '@angular/core';
import * as M from 'materialize-css';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'artapp';



  ngAfterViewInit(){
    
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, Option);
    });
  
    // Or with jQuery
  
    $(document).ready(function(){
      $('.modal').collapsible();
    });
    
  }
}



  