import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/pojos/Transaction';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TransactionListService } from 'src/app/service/transaction-list.service';
import { Account } from 'src/app/pojos/Account';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  balance = 0;
  listTransactions: Transaction[];
  categories: string[] = ["Education", "Food", "Entertainment"];
  closeResult: string;
  modalContent:Transaction;
  currTransaction: Transaction;

  saveTransaction(){
    if (this.listTransactions.includes(this.modalContent)){
      console.log(this.modalContent);
      console.log("This is an edit.");
      //this.transactionService.updateTransaction(this.modalContent)
      //.subscribe(
      //  res => {
      //    console.log("Successfully edited.");
      //  },
      //  err => {
      //    console.log(err);
      //  });
    }
    else{
      console.log("This is a new transaction.");
      this.modalContent.account = new Account(1, "", null, null);
      console.log(this.modalContent);
      //this.transactionService.createTransaction(this.modalContent)
      //.subscribe(
      //  res => {
      //    console.log("Successfully created.");
      //    this.modalContent = res;
          this.listTransactions.push(this.modalContent);
      //  },
      //  err => {
      //    console.log(err);
      //  });
    }
    this.calculateNewBalance();
  }
  
  deleteTransaction(event: MouseEvent){
    console.log("deleted");
  }

  cancelTransaction(){
    console.log("I am cancelling my subscription.")
    if (this.listTransactions.includes(this.modalContent)){
      let index = this.listTransactions.indexOf(this.modalContent);
      this.listTransactions[index] = this.currTransaction;
    }
  }

  changeDate(e){
    e = e.target.value;
    this.modalContent.date = e;
    //let d = new Date(Date.UTC(e[0], e[1]-1, e[2]));
    //this.modalContent.date.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  }

  calculateNewBalance(){
    this.balance = 0;
    for(let transaction of this.listTransactions){
      this.balance += transaction.amount;
    }
  }

  constructor(private modalService: NgbModal, private transactionService: TransactionListService) { console.log(this.listTransactions)}

  ngOnInit() {
    this.transactionService.getAllTransactionsByAccountId(1).subscribe(
      res => {
        console.log(res);
        this.listTransactions = res;
        for (let transaction of this.listTransactions){
          console.log(transaction);
          let month = new Date().getMonth() + 1;
          let day = new Date().getDate();
          let year = new Date().getFullYear();
          let dateString = year + "-" + month + "-" + day;
          transaction.date = dateString;
        }
        this.calculateNewBalance();
      },
      err => {
        console.log(err);
      }
    );
  }

  open(content, transaction, isNew: boolean) {
    if (isNew){
      transaction = new Transaction();
    }

    this.currTransaction = new Transaction(
      transaction.id,
      transaction.accountId,
      transaction.transactionName,
      transaction.amount,
      transaction.date,
      transaction.note
    );
    
    this.modalContent = transaction;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
