import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  userIsLogged = false
  
  employeeId:number | undefined;
  user:any

  getCustomers(){
    return this.http.get("http://localhost:3000/users")
  }

  isUserLoggedIn(){
    return this.userIsLogged
  }

}
