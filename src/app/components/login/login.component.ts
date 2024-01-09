import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

interface User {
  password: string;
  login: string;
  employeeId: number;

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent {

  constructor(private authService: AuthService, private readonly router:Router){}

  

  logIn = new FormGroup({
    login: new FormControl,
    password: new FormControl,
  })

  users: User[] = []

  submit(login:any, password:any){
    this.authService.getCustomers().subscribe((data: any) => {
      this.users = data;
    });
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].login === login && this.users[i].password === password){
        this.authService.user = this.users[i];
        this.authService.userIsLogged = true;
        console.log(this.authService.userIsLogged)
      }
    }
    this.router.navigate(['/dashboard']);
  }
  

}
