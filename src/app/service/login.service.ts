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

  postUser(email: string, password: string): Observable<any> {
    let loginRequest = {
      email: email, 
      password: password
    };
    return this.http.post<any>(this.loginUrl, loginRequest);
  }

  constructor(private http: HttpClient) { }

  loginUser(user: User): Observable<any> {
    return this.http.post<any>(this.loginUrl, user);
  }
}
