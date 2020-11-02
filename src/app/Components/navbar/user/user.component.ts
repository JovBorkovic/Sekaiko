import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() isAuthenticated: boolean;
  @Output() isLoggingOut = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitLogout() {
    this.isLoggingOut.emit();
  }

}
