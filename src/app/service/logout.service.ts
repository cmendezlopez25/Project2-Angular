import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlList } from './url.list';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  urlList = new UrlList();

  logout(): Observable<any>{
    return this.http.get(this.urlList.logoutUrl);
  }

  constructor(private http: HttpClient) { }
}
