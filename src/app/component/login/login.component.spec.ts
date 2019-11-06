import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/user';
import { userInfo } from 'os';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [ 
        LoginComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be true because they\'re good input', () => {
    let myUser = new User();
    myUser.email = 'ricky@gmail.com';
    myUser.password = 'rickyIsGreat';

    expect(component.login(myUser)).toBe(true);
  });
  
  it('should be false because they\'re empty strings', () => {
    let myUser = new User();
    myUser.email = '';
    myUser.password = '';

    expect(component.login(myUser)).toBe(false);
  });

  it('should be false because they\'re missing @', () => {
    let myUser = new User();
    myUser.email = 'carlos';
    myUser.password = 'burrito';

    expect(component.login(myUser)).toBe(false);
  })

  it('should be true because they\'re good input', () => {
    expect(component.register('ricky@ricky.ricky', 'password', 'password', 'Ricky', 'Wang')).toBe(true);
  });


  it('should be false because they\'re empty strings', () => {
    expect(component.register('', '', '', '', '')).toBe(false);
  });

  it('should be false because there is no @ symbol', () => {
    expect(component.register('carlos', 'burrito', 'burrito', 'Carlos', 'Mendez'))
    .toBe(false);
  });

  it('should be false because the passwords don\'t match', () => {
    expect(component.register('carlos@email.com', 'burrito', 'burritoSupreme', 'Carlos', 'Mendez'))
    .toBe(false);
  });

});
