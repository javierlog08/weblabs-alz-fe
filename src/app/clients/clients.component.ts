import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { AppComponentInterface } from '../shared/app.component.interface';
import { ClientsService } from './clients.service';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { _ } from 'underscore';


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
  ITEMS_PER_PAGE: number = 20;

  constructor(private clientService: ClientsService, private scrollDispatcher: ScrollDispatcher, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this._getClients(this.last_page, this.ITEMS_PER_PAGE);
  }

  ngAfterViewInit() {
    this.scrollDispatcher.scrolled().subscribe((element: CdkScrollable)=>{
      if(element) {
        let mainContentDiv = element.getElementRef().nativeElement  as HTMLElement;
        if(mainContentDiv.className.indexOf("main-content") > -1) {
          this._addListScrollHandler(mainContentDiv);
        }
      }
    });
  }

  private _addListScrollHandler(e: HTMLElement) {
    let st = e.scrollTop;

    if (st > this.lastScrollTop) {
      this.last_page = (this.last_page + this.ITEMS_PER_PAGE);
      this._getClients(this.last_page, this.ITEMS_PER_PAGE);
    } 

    this.lastScrollTop = st;
  }

  private _getClients(start, offset) {
    this.clientService.getClients(start, offset).subscribe((res)=> {
      this.naturalClients = _.uniq(this.naturalClients.concat(res));
      this.ref.detectChanges();
    });
  }

}
