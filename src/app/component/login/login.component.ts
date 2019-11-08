import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/pojos/User';
import { Router } from '@angular/router';

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

  viewPassword = false;
  passwordType = "password";

  @Output() public userToHome = new EventEmitter();

  login(user: User): void{
    if (!user.email || !user.password) {
      this.loginErrorMsg = "Email or password can't be empty.";
      return;
    }

    else if (!user.email.includes('@')) {
      this.loginErrorMsg = "Email must contain @ symbol.";
      return;
    }

    this.loginErrorMsg = "";
  
    this.loginService.loginUser(user)
      .subscribe(
        res => {
          if (!res) {
            console.log("res is null")
            this.loginErrorMsg = "The email and password did not match records.";
            console.log(this.loginErrorMsg);
          }
          else {
            this.router.navigate(['/home']);
            this.loginService.setCurUser(res);
          }
        },
        err => {
          this.loginErrorMsg = "Failed to contact server.";
        }
      );
  }

  register(user: User): void{
    if (!user.email || 
        !user.password || 
        !user.confirmPassword || 
        !user.firstName || 
        !user.lastName){
      this.registerErrorMsg = "None of the fields can be empty."
      return;
    }

    if (!user.email.includes('@')) {
      this.registerErrorMsg = "Email must contain @ symbol.";
      return;
    }

    if(user.password !== user.confirmPassword){
      this.registerErrorMsg = "Passwords do not match.";
      return;
    }

    this.registerErrorMsg = "";

    this.loginService.registerUser(user)
      .subscribe(
        res => {
          if (!res) {
            this.registerErrorMsg = "Email is already in use.";
            console.log(this.registerErrorMsg);
          }
          else {
            this.router.navigate(['home']);
            console.log(res);
          }
        },
        err => {
          this.registerErrorMsg = "Failed to contact server.";
        }
      );
  }

  switchBool() : void{
    this.viewPassword = !this.viewPassword;
    this.passwordType = this.viewPassword ? "text" : "password";
  }

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }


}
