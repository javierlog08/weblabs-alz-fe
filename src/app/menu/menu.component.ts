import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { MatSidenav } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  public username: string;

  @Input() appMainSideNav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.username = localStorage.getItem('user_name').toUpperCase();
  }

  closeMenu():void {
    this.appMainSideNav.toggle();
  }
  

}
