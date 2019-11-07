import { Component, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() public hideSideBar = false;
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    console.log("====== curUser from home");
    console.log(this.loginService.getCurUser());
  }

}
