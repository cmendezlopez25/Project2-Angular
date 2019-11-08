import { Component, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/pojos/User';
import { AccountListService } from 'src/app/service/account-list.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() public hideSideBar = false;
  public loginUser: User = null;
  
  constructor(private loginService: LoginService, private accountService: AccountListService) { }

  ngOnInit() {
    // grab current login user
    this.loginUser = this.loginService.getCurUser();
    //get account list for user
    let accounts = [];
    if (this.loginUser) {
      for (let ura of this.loginUser.userRoleAccounts) {
        accounts.push(ura.account);
      }
    }
    // set account list for current user
    this.accountService.setAccountList(accounts);
  }

}
