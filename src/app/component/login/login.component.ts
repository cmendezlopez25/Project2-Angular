import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginSuccess = false;

  loginUser = new User();
  registerUser = new User();

  registerEmail = "";
  registerPassword = "";
  confirmPassword = "";
  firstName = "";
  lastName = "";
  registerSuccess = false;

  login(user: User): boolean{
    console.log(user);
    
    if (user.email.length === 0 || user.password.length === 0){
      console.log('inside if statement with length === 0');
      this.loginSuccess = false;
      return this.loginSuccess;
    }

    if (!user.email.includes('@')) {
      this.loginSuccess = false;
      return this.loginSuccess;
    }


    console.log(this.loginSuccess);
    this.loginSuccess = true;
    console.log(this.loginSuccess);
    this.loginService.loginUser(user)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
    return this.loginSuccess;
  }

  register(user: User): boolean{
    if (this.registerUser.email.length === 0 || this.registerUser.password.length === 0 || this.registerUser.confirmPassword.length === 0 || this.registerUser.firstName.length === 0 || this.registerUser.lastName.length === 0){
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
