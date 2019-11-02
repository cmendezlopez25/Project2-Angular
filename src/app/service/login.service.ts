import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {User} from '../user';
import { UrlList } from '../service/url.list';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlList = new UrlList();

  loginUrl = this.urlList.loginUrl;

  postUser(email: string, password: string) {
    let loginRequest = {
      email: email, 
      password: password
    };

    this.http.post(
      this.loginUrl, 
      loginRequest,
      {responseType: 'text'}
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }

  constructor(private http: HttpClient) { }

}
