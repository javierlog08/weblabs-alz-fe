import { Component, OnInit } from '@angular/core';
import { AppComponentInterface } from '../shared/app.component.interface';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, AppComponentInterface {

  title: string = "Clientes";

  constructor() { }

  ngOnInit() {
  }

}
