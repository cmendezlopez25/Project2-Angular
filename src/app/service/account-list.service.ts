import { Injectable } from '@angular/core';
import { User } from '../pojos/User';
import { Account } from '../pojos/Account';
import { UserRoleAccount } from '../pojos/UserRoleAccount';
import { Role } from '../pojos/Role';

@Injectable({
  providedIn: 'root'
})
export class AccountListService {

  // relation_1 = new UserRoleAccount(
  //   1, new User('carlos@email.com'), 
  //   new Role(1, 'Owner'), 
  //   new Account(1, 'Carlos\' Account')
  // )
  // relation_2 = new UserRoleAccount(
  //   2, new User('ricky@email.com'),
  //   new Role(4, 'Employee'), 
  //   new Account(1, 'Carlos\' Account')
  // )
  // relation_3 = new UserRoleAccount(
  //   3, new User('jane@email.com'),
  //   new Role(2, 'Admin'), 
  //   new Account(1, 'Carlos\' Account')
  // )
  // relation_4 = new UserRoleAccount(
  //   4, new User('ricky@email.com'),
  //   new Role(1, 'Owner'), 
  //   new Account(2, 'Ricky\'s Account')
  // )
  // relation_5 = new UserRoleAccount(
  //   5, new User('jane@email.com'),
  //   new Role(3, 'Moderator'), 
  //   new Account(2, 'Ricky\'s Account')
  // )
  // relation_6 = new UserRoleAccount(
  //   6, new User('jacob@email.com'),
  //   new Role(2, 'Admin'), 
  //   new Account(2, 'Ricky\'s Account')
  // )
  // private carlos_relations = [
  //   this.relation_1, 
  //   this.relation_2,
  //   this.relation_3
  // ];
  // private ricky_relation = [
  //   this.relation_4,
  //   this.relation_5,
  //   this.relation_6
  // ]

  private accountList = [
   ];

  constructor() { }

  public getAccountList(): Account[] {
    return this.accountList;
  }

  public setAccountList(accList: Account[]): void {
    this.accountList = accList;
  }
}
