import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomersDatabaseService } from 'src/app/services/customers-database.service';
import { Customer } from 'src/app/interfaces';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {

  constructor(private customersDatabaseService: CustomersDatabaseService){}

  customer = new FormGroup({
    name: new FormControl ('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z -]*$'),
    ]),
    surname: new FormControl ('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z -]*$'),
    ]),
    adress: new FormControl ('', [
      Validators.required,
    ]),
    postalCode: new FormControl ('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    phoneNumber: new FormControl ('', [
      Validators.pattern('^[0-9]*$'),
    ]),
    email: new FormControl ('', [
      Validators.email,
    ]),
    status: new FormControl ('', [
      Validators.required,
    ]),
  })

  customerData: any = {
    id: 0,
    name: '',
    surname: '',
    adress: '',
    postalCode: 0,
    status: '',
    comments: '',
    employeeId: 0
  }
  id: number = 0;
  employeeId: number = 0;


  onSubmit(){
    if(this.customer.valid){
      if(this.customersDatabaseService.customerUpdating === true){
        this.customerData = {
          id: this.id,
          name: this.customer.value.name,
          surname: this.customer.value.surname,
          adress: this.customer.value.adress,
          postalCode: this.customer.value.postalCode,
          status: this.customer.value.status,
          comments: '',
          employeeId: this.employeeId
        };
        this.customersDatabaseService.updateCustomer(this.customerData).subscribe({
          next: (data) => console.log(data),
          error: (err) => {console.log(err)}
        });
      };
    }
    this.runUpdateView()
  }

  getData(arg: any){
    this.customer = new FormGroup({
      name: new FormControl ( arg.name, [
        Validators.required,
        Validators.pattern('^[a-zA-Z -]*$'),
      ]),
      surname: new FormControl (arg.surname, [
        Validators.required,
        Validators.pattern('^[a-zA-Z -]*$'),
      ]),
      adress: new FormControl (arg.adress, [
        Validators.required,
      ]),
      postalCode: new FormControl (arg.postalCode, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      phoneNumber: new FormControl (arg.phoneNumber, [
        Validators.pattern('^[0-9]*$'),
      ]),
      email: new FormControl (arg.email, [
        Validators.email,
      ]),
      status: new FormControl (arg.status, [
        Validators.required,
      ]),
    })
    this.id = arg.id
  }

  ngOnInit(){
    this.getData(this.customersDatabaseService.customerValue)
  }
  runUpdateView(){
    this.customersDatabaseService.updateViewFn()
  }

}
