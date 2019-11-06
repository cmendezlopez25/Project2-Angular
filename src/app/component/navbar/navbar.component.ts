import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LogoutService } from 'src/app/service/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public hideSideBar = false;
  @Output() public toggleEvent = new EventEmitter();

  logout(){
    this.logoutService.logout()
    .subscribe(
      res => {
        console.log("Logout successful.");
      },
      err => {
        console.log(err);
      }
    )
  }

  constructor(private logoutService: LogoutService) { }

  ngOnInit() {

  }

  public toggleSideBar() {
    this.hideSideBar = !this.hideSideBar;
    this.toggleEvent.emit(this.hideSideBar);
  }
}
