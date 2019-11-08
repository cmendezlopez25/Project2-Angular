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
  listTransactions: Transaction[] = [new Transaction("Subway", 100.00), new Transaction("Chipotle", 75.44)];
  categories: string[] = ["Education", "Food", "Entertainment"]
  closeResult: string;
  modalContent:undefined;
  
  deleteTransaction(event: MouseEvent){
    //event.target
  }

  constructor(private modalService: NgbModal) { console.log(this.listTransactions)}

  ngOnInit() {
  }

  open(content, transaction) {
    this.modalContent = transaction;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
