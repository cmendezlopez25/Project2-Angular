import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginSuccess = false;

  registerEmail = "";
  registerPassword = "";
  confirmPassword = "";
  firstName = "";
  lastName = "";
  registerSuccess = false;

  login(email: string, password: string): boolean{
    console.log('password: ' + password + ' ---------------- email: ' + email);
    
    if (email.length === 0 || password.length === 0){
      console.log('inside if statement with length === 0');
      this.loginSuccess = false;
      return this.loginSuccess;
    }

    if (!email.includes('@')) {
      this.loginSuccess = false;
      return this.loginSuccess;
    }

    let user = new User();
    user.email = email;
    user.password = password;

    console.log(this.loginSuccess);
    this.loginSuccess = true;
    console.log(this.loginSuccess);
    this.loginService.postUser(email, password);
    return this.loginSuccess;
  }

  register(email: string, password: string, confirmPassword: string, firstname: string, lastname: string): boolean{
    if (email.length === 0 || password.length === 0 || confirmPassword.length === 0 || firstname.length === 0 || lastname.length === 0){
      this.registerSuccess = false;
      return this.registerSuccess;
    }

    if (!email.includes('@')) {
      this.registerSuccess = false;
      return this.registerSuccess;
    }

    if(password !== confirmPassword){
      this.registerSuccess = false;
      return this.registerSuccess;
    }
    this.registerEmail = email;
    this.registerPassword = password;
    this.firstName = firstname;
    this.lastName = lastname;
    this.confirmPassword = confirmPassword;

    this.registerSuccess = true;
    return this.registerSuccess;
  }

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
