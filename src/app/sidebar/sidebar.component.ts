import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() public hideSideBar = false;
  public showStyle = {
    width: "250px",
  }
  public hideStyle = {
    width: "0px",
  }

  constructor() { }

  ngOnInit() {
  }

}
