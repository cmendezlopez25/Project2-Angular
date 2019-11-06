import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginErrorMsg = "";
  registerErrorMsg = "";

  loginUser = new User();
  registerUser = new User();

  login(user: User): void{
    console.log("1");
    if (!user.email || !user.password) {
      this.loginErrorMsg = "Email or password can't be empty.";
      return;
    }

    else if (!user.email.includes('@')) {
      this.loginErrorMsg = "Email must contain @ symbol.";
      return;
    }
  
    this.loginService.loginUser(user)
      .subscribe(
        res => {
          if (!res) {
            console.log("res is null")
            this.loginErrorMsg = "The email and password did not match records.";
            console.log(this.loginErrorMsg);
          }
          else {
            console.log(res);
          }
        },
        err => {
          this.loginErrorMsg = "Failed to contact server.";
        }
      );
  }

  register(user: User): void{
    if (!this.registerUser.email || 
        !this.registerUser.password || 
        !this.registerUser.confirmPassword || 
        !this.registerUser.firstName || 
        !this.registerUser.lastName){
      this.registerErrorMsg = "None of the fields can be empty."
      return;
    }

    if (!this.registerUser.email.includes('@')) {
      this.registerErrorMsg = "Email must contain @ symbol.";
      return;
    }

    if(this.registerUser.password !== this.registerUser.confirmPassword){
      this.registerErrorMsg = "Passwords do not match.";
      return;
    }

    this.loginService.registerUser(user)
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.log(err)
        }
      );
  }

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
