import { Component, OnInit } from '@angular/core';
import { AppComponentInterface } from '../shared/app.component.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AppComponentInterface {

  searchPlaceHolder: string = "";

  hasSearch: boolean = false;
  
  title: string = "Home";
  
  constructor() { }

  ngOnInit() {
  }

  searchHandler() {
    throw new Error("Method not implemented.");
  }
}
