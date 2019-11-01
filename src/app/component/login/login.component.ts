import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginEmail = "";
  loginPassword = "";
  loginSuccess = true;

  registerEmail = "";
  registerPassword = "";
  confirmPassword = "";
  firstName = "";
  lastName = "";
  registerSuccess = true;

  login(): boolean{
    if (this.loginEmail.length === 0 || this.loginPassword.length === 0){
      this.loginSuccess = false;
      return this.loginSuccess;
    }

    this.loginSuccess = true;
    return this.loginSuccess;
  }

  register(): boolean{
    if (this.registerEmail.length === 0 || this.registerPassword.length === 0 || this.confirmPassword.length === 0 || this.firstName.length === 0 || this.lastName.length === 0){
      this.registerSuccess = false;
      return this.registerSuccess;
    }

    if (!this.registerEmail.includes('@')) {
      this.registerSuccess = false;
      return this.registerSuccess;
    }

    if(this.registerPassword !== this.confirmPassword){
      this.registerSuccess = false;
      return this.registerSuccess;
    }

    this.registerSuccess = true;
    return this.registerSuccess;
  }

  constructor() { }

  ngOnInit() {
  }

}
