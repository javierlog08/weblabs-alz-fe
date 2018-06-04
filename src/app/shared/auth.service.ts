import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable()
export class AuthService implements CanActivate {

  private _isLogged: boolean = false;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {

    if(!this._isLogged) {
      this.router.navigate(['/login']);
    }


    return this._isLogged;
  }

  login(username: string, password: string) : boolean {    
    return this._isLogged
  }

  isLogged() : boolean {
    return this._isLogged;
  }
}
