import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable()
export class AuthService implements CanActivate {

  private _isLogged: boolean = false;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {

    if(!this.isLogged()) {
      this.router.navigate(['/login']);
    }


    return this._isLogged;
  }

  /**
   * You should use this to validate the login, it could to be async, must return true or false
   * @param username 
   * @param password 
   */
  login(username: string, password: string) : boolean {    
    return this._isLogged
  }

  /**
   * Return true if the user is logged
   */
  isLogged() : boolean {
    return this._isLogged;
  }
}
