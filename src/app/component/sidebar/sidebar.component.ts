import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountListService } from 'src/app/service/account-list.service';
import { User } from 'src/app/pojos/User';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() public hideSideBar = false;

  public loginUser: User = null;
  public selectedAccount = "";
  public accountList = [];
  public showStyle = {
    width: "250px"
  }
  public hideStyle = {
    width: "0px"
  }

  constructor(private loginService: LoginService) {
    
  }

  ngOnInit() {
    this.loginUser = this.loginService.getCurUser();
    for (let relation of this.loginService.getCurUser().userRoleAccounts) {
      this.accountList.push(relation.account);
    }
    console.log("login user of side bar==============");
    console.log(this.loginUser);
  }

  public getAccountName(event) {
    this.selectedAccount = event.target.innerText;
  }
}
