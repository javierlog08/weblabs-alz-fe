import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  showSearch : boolean = false;
  minLength: number = 2;
  placeHolder: string = "";

  constructor() { }

  eventHandler:(event)=> any;

  ngOnInit() {
  }

  onKeyUp(event: any) {
    if(event.target.value.length >= this.minLength) {
      this.eventHandler(event);
    }
  }

  setHandler(handler: (event:any)=>any) {
    this.eventHandler = handler;
  }

}
