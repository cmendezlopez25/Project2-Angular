import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RolesService } from 'src/app/service/util/roles.service';
import { Account } from 'src/app/pojos/Account';
import { UserRoleAccount } from 'src/app/pojos/UserRoleAccount';
import { User } from 'src/app/pojos/User';
import { Role } from 'src/app/pojos/Role';
import { Transaction } from 'src/app/pojos/Transaction';
import { AddAccountService } from 'src/app/service/add-account.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {
  closeResult: string;
  public roles = this._roles.getRoles();

  public newAccountName = "";
  public userEmail = "";
  public role = "";
  
  public errorMsg = "";
  constructor(
    private modalService: NgbModal, 
    private _roles: RolesService,
    private addAccountService: AddAccountService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.errorMsg = "";
    this.newAccountName = "";
    this.userEmail = "";
    this.role = "";
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  public getNewAccInfo() {
    let relation;
    let newAccount;
    let newUser;
    let newRole;
    if (this.newAccountName === "") {
      this.errorMsg = "Invalid Account Name";
    }

    newAccount = new Account(-1, this.newAccountName, [], []);
    if (this.userEmail) {
      newUser = new User(this.userEmail);
      newRole = new Role(Role.getRoleId(this.role), this.role, []);
      relation = new UserRoleAccount(-1, newUser, newRole, null);
      let uraList = [];
      uraList.push(relation);
      newAccount.setRelation(uraList);
    }
    // console.log(newAccount);
    this.addAccountService.createAccount(newAccount)
      .subscribe(
        res => {
          if (res) {
            console.log(res);
            this.router.navigate(['home']);
          }
        },
        err => {
          this.errorMsg = "Failed to create account.";
          console.log(err);
        }
      )
  }

}
