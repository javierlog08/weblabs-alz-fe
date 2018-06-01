import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable()
export class AuthService implements CanActivate {

  isLogged: boolean = false;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {

    if(!this.isLogged) {
      this.router.navigate(['/login']);
    }


    return this.isLogged;
  }

  login(username: string, password: string) : boolean {    
    return this.isLogged
  }

  loginValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      return (this.isLogged) ? null : { 'loginError': { value: " Wrong username or password. " } } ;
    };
  }
}
