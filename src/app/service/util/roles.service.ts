import { Injectable } from '@angular/core';
import { UserRoleAccount } from 'src/app/pojos/UserRoleAccount';
import { User } from 'src/app/pojos/User';
import { Role } from 'src/app/pojos/Role';
import { Account } from 'src/app/pojos/Account';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  public allRoles = ["Owner", "Admin", "Moderator", "Employee"];

  constructor() { }
  public getRoles() {
    return this.allRoles;
  }
}
