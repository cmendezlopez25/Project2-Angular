import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() public hideSideBar = false;

  public selectedAccount = "";
  public accountList = ["Example Account 1", "Example Acount 2"];
  public showStyle = {
    width: "250px"
  }
  public hideStyle = {
    width: "0px"
  }

  constructor() { }

  ngOnInit() {
  }

  public getAccountName(event) {
    this.selectedAccount = event.target.innerText;
    console.log(this.selectedAccount);
  }
}
