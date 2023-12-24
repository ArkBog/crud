import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces';

@Injectable({
  providedIn: 'root'
})


export class CustomersDatabaseService {

  customer: Customer = {
    id: 0,
    name: '',
    surname: '',
    adress: '',
    postalCode: 0,
    status: '',
    comments: '',
    employeeId: 0
  }

  customerValue = {};
  customerUpdating: boolean = false;

  constructor(private http: HttpClient) { }

  getCustomers(){
    return this.http.get("http://localhost:3000/customers")
  }

  updateCustomer(body:any):Observable<Customer>{

    return this.http.put<Customer>(`http://localhost:3000/customers/${body.id + 1}`, body)
  }

}

