import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  addUser(user: User): Observable<User>{

    return 
  }

  getUser(email: String): void{

  }

  constructor(private http: HttpClient) { }

}
