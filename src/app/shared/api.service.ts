import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from './api.config.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private config;

  constructor(private http: HttpClient) { 
    this.config = config;
  }

  /**
   * Return from endpoint ie: http://host:port/endpoint
   * @param endpoint string The property of the configured endpoint see api.config.json file
   */
  getUrl(endpoint:string) {
    if(this.config.endpoints[endpoint].indexOf("/") !== 0) {
      console.error("Every endpoint should start with '/' in the config file. Endpoint name you are using is '%s', please fix it on 'api.config.json' file",endpoint);
    }
    return this.config.protocol+ this.config.host +":"+ this.config.port + this.config.endpoints[endpoint];
  }

  
}
