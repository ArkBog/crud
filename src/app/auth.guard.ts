import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements 
CanActivate {

  constructor(
    private readonly authService:AuthService,
    private readonly router:Router
  ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    

      if (this.authService.isUserLoggedIn()){
        console.log('zalogowany')
        return true
      } else {
        this.router.navigate([''])
         console.log('niezalogowany')
         return false
      }

  }
}
