import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  public roles = ["Owner", "Admin", "Moderator", "Employee"];
  
  constructor() { }
  public getRoles() {
    return this.roles;
  }
}
