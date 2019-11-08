import { Injectable } from '@angular/core';
import { Account } from '../pojos/Account';
import { Observable } from 'rxjs';
import { UrlList } from '../service/url.list';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountListService {

  private accountList: Account[];
  
  private accUrl = new UrlList().accountUrl;
  constructor(private http: HttpClient) { 
    this.getAccountByUser()
      .subscribe(
        res => {
          if (res) {
            this.accountList = res;
          }
        },
        err => {
          console.log("Fail to get Account list");
        }
      )
  }

  public getAccountByUser(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accUrl);
  }

  public getAccountList(): Account[] {
    return this.accountList;
  }

  public setAccountList(accList: Account[]): void {
    this.accountList = accList;
  }

}
