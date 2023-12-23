import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomersDatabaseService } from 'src/app/services/customers-database.service';

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

  onSubmit(){
    if(this.customer.valid){
      console.log(this.customer)
    }
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
    console.log('to jest z add user', this.customer)
  }

  ngOnInit(){
    this.getData(this.customersDatabaseService.customerValue)
  }

}
