import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';


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
    expect(component.login('ricky@ricky.ricky', 'password')).toBe(true);
  });
  
  it('should be false because they\'re empty strings', () => {
    expect(component.login('', '')).toBe(false);
  });

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
