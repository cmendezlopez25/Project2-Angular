import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountListService } from 'src/app/service/account-list.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() public hideSideBar = false;

  public selectedAccount = "";
  public accountList = [];
  public showStyle = {
    width: "250px"
  }
  public hideStyle = {
    width: "0px"
  }

  constructor(private accList: AccountListService) {
    
  }

  ngOnInit() {
    this.accountList = this.accList.getAccountList();
    console.log(this.accountList);
  }

  public getAccountName(event) {
    this.selectedAccount = event.target.innerText;
    console.log(this.selectedAccount);
  }
}
