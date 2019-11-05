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

  it('should be true', () => {
    expect(component.login('ricky@ricky.ricky', 'password')).toBe(true);
  });
  it('should be false', () => {
    expect(component.login('', '')).toBe(false);
  });

  it('should be true', () => {
    expect(component.register('ricky@ricky.ricky', 'password', 'password', 'Ricky', 'Wang')).toBe(true);
  });
  it('should be false', () => {
    expect(component.register('', '', '', '', '')).toBe(false);
  });

});
