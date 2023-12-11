import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  name = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z -]*$'),
  ]);
  surname = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z -]*$'),
  ]);
  adress = new FormControl('', [
    Validators.required
  ]);
  postalCode = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]*')
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  phone = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]*')
  ]);
  status = new FormControl('', [
    Validators.required,
  ]);
  comment = new FormControl('');

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('pattern') ? 'Not a valid name' : '';
  }
}
