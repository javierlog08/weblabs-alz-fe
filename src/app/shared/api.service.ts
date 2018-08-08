import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as config from './api.config.json';
import { StorageService } from './storage.service';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private config;

  constructor(private http: HttpClient, private storage:StorageService) { 
    this.config = config;
  }

  /**
   * Return from endpoint ie: http://host:port/endpoint
   * @param endpoint string The property of the configured endpoint see api.config.json file
   */
  getEndpointUrl(endpoint:string) {
    if(this.config.endpoints[endpoint].indexOf("/") !== 0) {
      console.error("Every endpoint should start with '/' in the config file. Endpoint name you are using is '%s', please fix it on 'api.config.json' file",endpoint);
    }
    return this.config.protocol+ this.config.host +":"+ this.config.port + this.config.endpoints[endpoint];
  }

  /**
   * Perform an HttpClient.get() request, but including x-auth-token on every request.
   * You should use this method to perfom every request to get,simple JSON data from the REST API, cause in every request a x-auth-toke required will be include.
   * If you need to make more complex request you could use HttpClient directly , but remeber include x-auth-token manually.
   * @param endpoint One route to this API, please see api.config.json file
   * @param params query string data
   * @return Observable<Object> 
   */
  get(endpoint: string, params?: HttpParams| any): Observable<Object> {
    const headers = {
        "x-auth-token": this.storage.getValue("session-token")
    }

    return this.http.get(this.getEndpointUrl(endpoint),{headers:headers, params:params});
  }

  
}
