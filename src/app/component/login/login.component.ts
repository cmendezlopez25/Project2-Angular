import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    let loginRequest = {
      email: email, 
      password: password
    };

    console.log(loginRequest);

    this.http.post(
      'http://localhost:8080/Project2/login', 
      loginRequest,
      {responseType: 'text'}
    ).subscribe(responseData => {
      console.log(responseData);
    });

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
