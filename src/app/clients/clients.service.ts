import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private api: ApiService) { }

  getClients(start, offset): Observable<any> {
    return this.api.get("clients", {"start_page": start, "end_page":offset});
  }
}
