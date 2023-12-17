import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {

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

}
