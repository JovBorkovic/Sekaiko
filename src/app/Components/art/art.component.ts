import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
declare var $: any;

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(() => {
      $('.collapsible').collapsible();
    });
  }

}
