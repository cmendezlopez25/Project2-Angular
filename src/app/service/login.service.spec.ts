import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginService } from './login.service';
import { Component, DebugElement } from '@angular/core';
import { LoginComponent } from '../component/login/login.component';



describe('LoginService', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;

  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ]
  }));

  let serviceStub: any;



    TestBed.configureTestingModule({
      
  });

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
