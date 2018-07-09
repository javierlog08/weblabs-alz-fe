import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders} from '../../../node_modules/@angular/common/http';

@Injectable()
export class AuthService implements CanActivate {

  private _isLogged: boolean = false;

  constructor(private router: Router, private http: HttpClient) { }

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

    let options = {
      headers: {
        "Authorization":"Basic "+btoa(username+":"+password)
      }
    }

    this.http.post("http://127.0.0.1:8080/foo",options).subscribe(
      (resp: HttpResponse<Text>) => {
        console.log(resp);
      }, err => {
        console.log(err);
      }
    );

    return this._isLogged
  }

  /**
   * Return true if the user is logged
   */
  isLogged() : boolean {
    return this._isLogged;
  }
}
