import { Component, OnInit, ViewChild, ComponentRef } from '@angular/core';
import { AppComponentInterface } from '../shared/app.component.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  lastScrollTop: number = 0;

  @ViewChild('appMainHeader') appMainHeader;

  constructor() { }

  ngOnInit() {
  }

  onRouterActivate(component: AppComponentInterface) {
    this.appMainHeader.setTitle(component.title);
  }

}
