import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() public modalTitle = "";

  public memberNames = ["Ricky@email.com", "Jane@email.com", "Jacob@email.com"];



  constructor() { }

  ngOnInit() {
  }

}
