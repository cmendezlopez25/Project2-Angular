import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/pojos/Transaction';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  balance = 100;
  listTransactions: Transaction[] = [new Transaction(-1, -1, "Subway", 100.00), new Transaction(-1, -1, "Chipotle", 75.44)];
  categories: string[] = ["Education", "Food", "Entertainment"];
  closeResult: string;
  modalContent:undefined;
  currTransaction: Transaction;

  saveTransaction(){
    if (this.listTransactions.includes(this.modalContent)){
      console.log(this.modalContent);
      console.log("This is an edit.");
    }
    else{
      console.log(this.modalContent);
      console.log("This is a new transaction.")
      this.listTransactions.push(this.modalContent);
    }
  }
  
  deleteTransaction(event: MouseEvent){
    //event.target
  }

  cancelTransaction(){
    console.log("I am cancelling my subscription.")
    if (this.listTransactions.includes(this.modalContent)){
      let index = this.listTransactions.indexOf(this.modalContent);
      this.listTransactions[index] = this.currTransaction;
    }
  }

  constructor(private modalService: NgbModal) { console.log(this.listTransactions)}

  ngOnInit() {
  }

  open(content, transaction, isNew: boolean) {
    if (isNew){
      transaction = new Transaction();
    }

    this.currTransaction = new Transaction(
      transaction.id,
      transaction.accountId,
      transaction.name,
      transaction.amount,
      transaction.date,
      transaction.note
    );
    
    this.modalContent = transaction;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
