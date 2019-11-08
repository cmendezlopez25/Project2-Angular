import { Injectable } from '@angular/core';
import { Account } from '../pojos/Account';
import { Observable } from 'rxjs';
import { UrlList } from '../service/url.list';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountListService {

  public accountList: any;
  
  private accUrl = new UrlList().accountUrl;
  constructor(private http: HttpClient) { 

  }

  public getAccountByUser(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accUrl);
  }

  public getAccountList(): Account[] {
    console.log("goint to return from account service")
    console.log(this.accountList);
    return this.accountList;
  }

  public setAccountList(accList: Account[]): void {
    this.accountList = accList;
  }

}
