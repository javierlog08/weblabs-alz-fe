import { Component, OnInit, ViewChild, ComponentRef } from '@angular/core';
import { MatSidenav } from '../../../node_modules/@angular/material';
import { AppComponentInterface } from '../shared/app.component.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('appMainHeader') appMainHeader;

  constructor() { }

  ngOnInit() {
  }

  onRouterActivate(component: AppComponentInterface) {
    this.appMainHeader.setTitle(component.title);
  }

}
