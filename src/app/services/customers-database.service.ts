import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from '../interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  customersDatabase = [];
  customersQuantity!: number;

  private updateViewSource = new Subject<void>();
  updatedView = this.updateViewSource.asObservable();

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  getCustomers(){
    return this.http.get("http://localhost:3000/customers")
  }

  updateCustomer(body:any):Observable<Customer>{

    return this.http.put<Customer>(`http://localhost:3000/customers/${body.id}`, body)
  }

  updateViewFn(){
    this.updateViewSource.next()
  }

  deleteCustomerService(body:any):Observable<Customer>{
    return this.http.delete<Customer>(`http://localhost:3000/customers/${body.id}`)
  }

  addCustomer(body:any){
    return this.http.post('http://localhost:3000/customers', body)
  }

  openSnackBar(message:string) {
    this._snackBar.open(message);this._snackBar.open(message, '', {
      duration: 3000,
    });
  }

}

