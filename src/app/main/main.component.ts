import { Component, OnInit, ViewChild, ComponentRef } from '@angular/core';
import { MatSidenav } from '../../../node_modules/@angular/material';
import { AppComponentInterface } from '../shared/app.component.interface';
import { ScrollDispatcher } from '../../../node_modules/@angular/cdk/overlay';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  lastScrollTop: number = 0;

  @ViewChild('appMainHeader') appMainHeader;

  constructor(private scrollDispatcher: ScrollDispatcher) { }

  ngOnInit() {
  }

  onRouterActivate(component: AppComponentInterface) {
    this.appMainHeader.setTitle(component.title);

    this._registerInfiniteSrollHandler();
  }

  private _registerInfiniteSrollHandler() {
    /*this.scrollDispatcher.scrolled().subscribe((element)=>{
      console.log(element);
      /*let st = window.pageYOffset;

      if (st > this.lastScrollTop) {
        // Moving down
        console.log("down");
      }  else {
        // Moving Up
      }

      this.lastScrollTop = st;
    });*/
  }

}
