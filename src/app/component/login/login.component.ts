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

  loginEmail = "";
  loginPassword = "";
  loginSuccess = false;

  registerEmail = "";
  registerPassword = "";
  confirmPassword = "";
  firstName = "";
  lastName = "";
  registerSuccess = false;

  login(email: string, password: string): boolean{
    this.loginService.postUser(email, password);
    
    if (email.length === 0 || password.length === 0){
      this.loginSuccess = false;
      return this.loginSuccess;
    }
    let user = new User();
    user.email = email;
    user.password = password;

    /*this.loginService.postUser(user)
    .subscribe(user => {
      if(!user){
        this.loginSuccess = false;
      }
      else{
        console.log("user has been verified and loged in")
        //TODO route to home page
      }
    });*/
    this.loginSuccess = true;
    return this.loginSuccess;
  }

  register(email: String, password: String, confirmPassword: String, firstname: String, lastname: String): boolean{
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

    this.registerSuccess = true;
    return this.registerSuccess;
  }

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
