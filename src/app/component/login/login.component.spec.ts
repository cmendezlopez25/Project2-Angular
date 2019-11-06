import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/user';
import { LoginService } from 'src/app/service/login.service';
import { Observable } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [ 
        LoginComponent
       ],
       providers:[
         LoginService
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(LoginService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login once', () => {
    spyOn(service, 'loginUser').and.returnValue(new Observable<User>());
    let myUser = new User();
    myUser.email = 'ricky@gmail.com';
    myUser.password = 'rickyIsGreat';

    component.login(myUser);
    expect(service.loginUser).toHaveBeenCalledTimes(1);
    expect(service.loginUser).toHaveBeenCalledWith(myUser);
  });
  
  it('shouldn\'t login because there are empty strings', () => {
    spyOn(service, 'loginUser').and.returnValue(new Observable<User>());
    let myUser = new User();
    myUser.email = '';
    myUser.password = '';

    component.login(myUser);
    expect(service.loginUser).toHaveBeenCalledTimes(0);
  });

  it('shouldn\'t login because there is no @', () => {
    spyOn(service, 'loginUser').and.returnValue(new Observable<User>());
    let myUser = new User();
    myUser.email = 'carlos';
    myUser.password = 'burrito';

    component.login(myUser);
    expect(service.loginUser).toHaveBeenCalledTimes(0);
  })

  it('should register once', () => {
    spyOn(service, 'registerUser').and.returnValue(new Observable<User>());
    let myUser = new User();
    myUser.email = 'ricky@ricky.ricky';
    myUser.password = 'password';
    myUser.confirmPassword = 'password';
    myUser.firstName = 'Ricky';
    myUser.lastName = 'Wang';

    component.register(myUser);
    expect(service.registerUser).toHaveBeenCalledTimes(1);
    expect(service.registerUser).toHaveBeenCalledWith(myUser);
  });


  it('shouldn\'t register because there are empty strings', () => {
    spyOn(service, 'registerUser').and.returnValue(new Observable<User>());
    let myUser = new User();
    myUser.email = '';
    myUser.password = '';
    myUser.confirmPassword = '';
    myUser.firstName = '';
    myUser.lastName = '';

    component.register(myUser);
    expect(service.registerUser).toHaveBeenCalledTimes(0);
  });

  it('shouldn\'t register because there is no @ symbol', () => {
    spyOn(service, 'registerUser').and.returnValue(new Observable<User>());
    let myUser = new User();
    myUser.email = 'carlos';
    myUser.password = 'burrito';
    myUser.confirmPassword = 'burrito';
    myUser.firstName = 'Carlos';
    myUser.lastName = 'Mendez';

    component.register(myUser);
    expect(service.registerUser).toHaveBeenCalledTimes(0);
  });

  it('shouldn\'t register because the passwords don\'t match', () => {
    spyOn(service, 'registerUser').and.returnValue(new Observable<User>());
    let myUser = new User();
    myUser.email = 'carlos@email.com';
    myUser.password = 'burrito';
    myUser.confirmPassword = 'burritoSupreme';
    myUser.firstName = 'Carlos';
    myUser.lastName = 'Mendez';

    component.register(myUser);
    expect(service.registerUser).toHaveBeenCalledTimes(0);
  });

});
