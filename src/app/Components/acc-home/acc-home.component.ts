import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-acc-home',
  templateUrl: './acc-home.component.html',
  styleUrls: ['./acc-home.component.css']
})
export class AccHomeComponent implements OnInit, AfterViewInit{

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
