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

  postUser(user: User): Observable<User>{
    return this.http.post<User>(this.loginUrl, user);
  }

  constructor(private http: HttpClient) { }

}
