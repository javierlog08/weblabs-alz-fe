import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { OptionsComponent } from './options/options.component';
import { MainComponent } from '../main/main.component';
import { MatSidenav, MatDrawer } from '../../../node_modules/@angular/material';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string;
  
  @ViewChild(OptionsComponent) settings: OptionsComponent;

  @Input() appMainSideNav: MatSidenav;

  @ViewChild(SearchComponent) search: SearchComponent;

  constructor() { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.appMainSideNav.toggle();
  }

  setTitle(title: string) {
    this.title = title;
  }

  setSearchHandler(handler:any, hasSearch:boolean,searchPlaceHolder: string ="") {
    this.search.setHandler(handler);
    this.search.showSearch = hasSearch; 
    this.search.placeHolder = searchPlaceHolder;
  }

}
