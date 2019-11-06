import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RolesService } from 'src/app/service/util/roles.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  closeResult: string;

  @Input() public modalTitle="";
  
  public roles = this._roles.getRoles();
  
  // This is just a placeholder
  public members = [
    {email: "Ricky@email.com", role: "Owner"},
    {email: "Jane@email.com", role: "Admin"},
    {email: "Jacob@email.com", role: "Moderator"}
  ];

  constructor(private modalService: NgbModal, private _roles: RolesService) {}

  public open(content: string) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  public deleteAccount() {
    // Placeholder
    if (confirm("Are you sure you want to delete " + this.modalTitle + "?")) {
      console.log("yes");
      this.modalService.dismissAll();
    }
    else {
      console.log("no");
    }
  }

  public saveAccount() {
    // Placeholder
    this.modalService.dismissAll();
  }
}