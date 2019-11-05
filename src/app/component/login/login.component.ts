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
  loginSuccess = true;

  registerEmail = "";
  registerPassword = "";
  confirmPassword = "";
  firstName = "";
  lastName = "";
  registerSuccess = true;

  login(email: string, password: string): boolean{
    this.loginService.postUser(email, password);
    
    if (this.loginEmail.length === 0 || this.loginPassword.length === 0){
      this.loginSuccess = false;
      return this.loginSuccess;
    }
    let user = new User();
    user.email = this.loginEmail;
    user.password = this.loginPassword;

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

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
