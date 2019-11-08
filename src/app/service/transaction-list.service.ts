import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../pojos/Transaction';
import { UrlList } from './url.list';

@Injectable({
  providedIn: 'root'
})
export class TransactionListService {
  urlList = new UrlList();

  getAllTransactionsByAccountId(id: number) : Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.urlList.accountUrl + "/" + id + "/transaction");
  }

  createTransaction(transaction: Transaction) : Observable<any>{
    return this.http.post(this.urlList.accountUrl + "/" + transaction.account.accountId + "/transaction", transaction);
  }

  updateTransaction(transaction: Transaction) : Observable<any>{
    return this.http.put(this.urlList.transactionUrl, transaction);
  }

  deleteTransaction(id: number) : Observable<any> {
    return this.http.delete(this.urlList.transactionUrl + id);
  }

  constructor(private http: HttpClient) { }
}
