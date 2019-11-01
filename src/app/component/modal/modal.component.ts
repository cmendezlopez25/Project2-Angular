import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() public modalTitle = "";

  public members = [
    {email: "Ricky@email.com", role: "Owner"}, 
    {email: "Jane@email.com", role: "Admin"},
    {email: "Jacob@email.com", role: "Moderator"},
  ];

  constructor() { }

  ngOnInit() {
    
  }

  public deleteAccount() {
    // We'll replace the inner logic with account deletion http request
    if (confirm("Are you sure you want to delete " + this.modalTitle + "?")) {
      console.log("yes");
    }
    else {
      console.log("no");
    }
  }
}
