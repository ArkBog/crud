import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';


@Injectable()
export class AuthGuard implements 
CanActivate {

  constructor(
    private readonly authService:AuthService,
    private readonly router: Router
  ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    

      if (this.authService.isUserLoggedIn()){
        this.router.navigate(['/dashboard'])
        console.log('zalogowany')
        return true
      } else {
        
         console.log('niezalogowany')
         return false
      }

  }
}
