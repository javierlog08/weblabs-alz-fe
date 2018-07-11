import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders} from '../../../node_modules/@angular/common/http';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { LoaderService } from './loader/loader.service';

@Injectable()
export class AuthService implements CanActivate {

  private _isLogged: boolean = false;

  constructor(
    private router: Router, 
    private http: HttpClient, 
    private storage: StorageService, 
    private api: ApiService,
    private loader: LoaderService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> {

    return this.isLogged();
  
  }

  /**
   * You should use this to validate the login, it could to be async, must return true or false
   * @param username 
   * @param password 
   */
  login(username: string, password: string): Observable<boolean> { 
    
    return new Observable<boolean>((observer)=> {
      const headers = {
          "Authorization":"Basic "+btoa(username+":"+password)
      }

      this.loader.openLoader();
      this.http.get(this.api.getUrl("login"),{headers:headers, observe:'response', responseType: 'text'}).subscribe(
        (resp) => {
          this.storage.setValue("session-token",resp.headers.get('x-auth-token'));
          observer.next(true);
          this.loader.closeLoader();
        }, err => {
          observer.next(false);
          this.loader.closeLoader();
        }
      );

    });
    
  }

  logout(): void {

    const headers = {
        "x-auth-token": this.storage.getValue("session-token")
    }

    this.loader.openLoader();
    this.http.get(this.api.getUrl("logout"),{headers:headers, observe:'response', responseType: 'text'}).subscribe(
        (resp) => {
          this.router.navigate(['/login']);
          this.loader.closeLoader();
        }, err => {
          this.storage.removeValue("session-token");
          this.router.navigate(['/login']);
          this.loader.closeLoader();
        }
    );

  }

  /**
   * Return true if the user is logged and false if not.  Also redict to login form
   */
  isLogged() : Observable<boolean> {

    return new Observable<boolean>((observer)=> {
      const headers = {
          "x-auth-token": this.storage.getValue("session-token")
      }
      
      this.http.get(this.api.getUrl("login"),{headers:headers, observe:'response', responseType: 'text'}).subscribe(
        (resp) => {
          observer.next(true);
        }, err => {
          this.router.navigate(['/login']);
          observer.next(false);
        }
      );
    });

  }
}
