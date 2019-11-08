  import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ModalComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open once', () => {
    spyOn(component, 'open');
    component.open('myContent');
    expect(component.open).toHaveBeenCalledTimes(1);
    expect(component.open).toHaveBeenCalledWith('myContent');
  });

  it('should save the account once', () => {
    spyOn(component, 'saveAccount');
    component.saveAccount();
    expect(component.saveAccount).toHaveBeenCalledTimes(1);
  });

  it('should delete the account once', () => {
    spyOn(component, 'deleteAccount');
    component.deleteAccount();
    expect(component.deleteAccount).toHaveBeenCalledTimes(1);
  })
});
