import { Injectable } from '@angular/core';
import { User } from '../user';
import { Account } from '../Account';

@Injectable({
  providedIn: 'root'
})
export class AccountListService {
  private carlosMember = [new User("ricky@email.com", 'password', 'password', 'Zhaochun', 'Wang'),
                        new User("jane@email.com", 'password', 'password', 'Jane', 'Shin')];
  private rickyMember = [new User("jacob@email.com", 'password', 'password', 'Jacob', 'Boni'),
                        new User("jane@email.com", 'password', 'password', 'Jane', 'Shin')];
  private accountList = [new Account('Carlos\' Account', this.carlosMember),
                        new Account('Ricky\'s Account', this.rickyMember)];

  constructor() { }

  public getAccountList() {
    return this.accountList;
  }
}
