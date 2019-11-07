import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  balance = 100;
  listTransactions: Transaction[] = [new Transaction("Subway", 100.00), new Transaction("Chipotle", 75.44)];

  constructor() { console.log(this.listTransactions)}

  ngOnInit() {
  }

}
