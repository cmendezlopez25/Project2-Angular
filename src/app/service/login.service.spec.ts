import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoginService } from './login.service';
import { Component, DebugElement } from '@angular/core';
import { LoginComponent } from '../component/login/login.component';
import { Observable } from 'rxjs';
import { User } from '../user';

describe('LoginService', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;

  beforeEach(() => TestBed.configureTestingModule({
    providers:[
      LoginService
    ],
    imports:[
      HttpClientTestingModule,
    ]
  }));

  let serviceStub: any;
    TestBed.configureTestingModule({
      
  });

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  xit('should log in the user',
    inject([HttpTestingController, LoginService],
    (httpMock: HttpTestingController, service: LoginService) =>
    {
      let myUser = new User();
      service.loginUser(myUser).subscribe(data => {
        
      });
    })
  )
});