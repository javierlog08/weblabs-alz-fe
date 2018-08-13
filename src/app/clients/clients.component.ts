import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentInterface } from '../shared/app.component.interface';
import { ClientsService } from './clients.service';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { Subscription } from '../../../node_modules/rxjs';

const ITEMS_PER_PAGE = 20;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, AppComponentInterface, AfterViewInit {

  title: string = "Clientes";

  naturalClients = new Array();

  last_page = 1;
  lastScrollTop: number = 0;
  direction: string = "";

  constructor(private clientService: ClientsService, private scrollDispatcher: ScrollDispatcher) { }

  ngOnInit() {
    this._getClients(this.last_page, ITEMS_PER_PAGE);
    
  }

  ngAfterViewInit() {
    

    this.scrollDispatcher.scrolled().subscribe(()=>{
      let st = window.pageYOffset;

      let dir = '';
      if (st > this.lastScrollTop) {
          dir = "down";
      } else {
          dir = "up";
      }

      this.lastScrollTop = st;

      if(dir == "down") {
        this.last_page = (this.last_page + ITEMS_PER_PAGE);
        this._getClients(this.last_page, ITEMS_PER_PAGE);
      }

    });
  }

  private _getClients(start, offset) {
    this.clientService.getClients(start, offset).subscribe((res)=> {
      this.naturalClients = this.naturalClients.concat(res);
    });
  }

}
