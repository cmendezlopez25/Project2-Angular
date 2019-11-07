import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Location} from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ModalComponent } from './component/modal/modal.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AddModalComponent } from './component/add-modal/add-modal.component';

import { LoginService } from './service/login.service';
import { TransactionsComponent } from './component/transactions/transactions.component';
import { LogoutService } from './service/logout.service';
import { TransactionModalComponent } from './component/transaction-modal/transaction-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ModalComponent,
    LoginComponent,
    HomeComponent,
    AddModalComponent,
    TransactionsComponent,
    TransactionModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent
  ],
  providers: [
    LoginService,
    LogoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

