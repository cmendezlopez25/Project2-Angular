import { Injectable } from '@angular/core';
import { UrlList } from './url.list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddAccountService {

  private accountUrl = new UrlList().accountUrl;

  constructor(private http: HttpClient) { }

  createAccount(newAcc: Account): Observable<Account> {
    console.log("URL: "+ this.accountUrl);
    return this.http.post<Account>(this.accountUrl, newAcc);
  }
}
