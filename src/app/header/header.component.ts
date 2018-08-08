import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { OptionsComponent } from './options/options.component';
import { MainComponent } from '../main/main.component';
import { MatSidenav, MatDrawer } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string;

  @ViewChild(OptionsComponent) settings: OptionsComponent;

  @Input() appMainSideNav: MatDrawer;

  constructor() { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.appMainSideNav.toggle();
  }

  setTitle(title: string) {
    this.title = title;
  }

}
