import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public hideSideBar = true;
  @Output() public toggleEvent = new EventEmitter(); 

  constructor() { }

  ngOnInit() {

  }

  public toggleSideBar() {
    this.hideSideBar = !this.hideSideBar;
    this.toggleEvent.emit(this.hideSideBar);
  }
}
