import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, ElementRef, ViewEncapsulation } from '@angular/core';
import { AppComponentInterface } from '../shared/app.component.interface';
import { ClientsService } from './clients.service';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { _ } from 'underscore';

var self = null;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, AppComponentInterface, AfterViewInit {
  
  title: string = "Clientes";
  hasSearch: boolean= true;
  searchPlaceHolder:string = "Introduce un nombre o numero de Indentidad...";

  clients = new Array();

  last_page = 1;
  lastScrollTop: number = 0;
  ITEMS_PER_PAGE: number = 15;
  searchTerm: string = "";
  

  constructor(
    private clientService: ClientsService, 
    private scrollDispatcher: ScrollDispatcher, 
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    self = this;
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

  searchHandler(event) {
    self.searchTerm = event.target.value;
    if(event.target.value.length > 0) {
      self._getClientsByTerm(event.target.value);
    } else {
      this._getClients(0, this.ITEMS_PER_PAGE);
    }
    
  }

  private _addListScrollHandler(e: HTMLElement) {
    let st = e.scrollTop;

    if (st > this.lastScrollTop && self.searchTerm.length <= 0) { // Moving scroll inivite only if we reserch the bottom and page search isnt active.
      this.last_page = (this.last_page + this.ITEMS_PER_PAGE);
      this._getClients(this.last_page, this.ITEMS_PER_PAGE);
    } 

    this.lastScrollTop = st;
  }

  private _getClientsByTerm(term:string) {
    this.clientService.getClientsByTerm(term).subscribe((res)=>{
      this.clients = res; 
      this._normalizePhoneNumbers(this.clients);
      this.ref.detectChanges();
    });
  }

  private _getClients(start, offset) {
    this.clientService.getClients(start, offset).subscribe((res)=> {
      this.clients = _.uniq(this.clients.concat(res)); // remove duplicates in case infinite scroll
      this._normalizePhoneNumbers(this.clients);
      if(this.ref)
        this.ref.detectChanges();
    });
  }

  private _normalizePhoneNumbers(clients) {
    // We need format client phones to only have the phones number instead and object to dsplay in screen
    clients = _.map(clients, (client)=>{
        if(client.phones instanceof Array) { // if phones arent array objects we dont convert them to string
          client.phones = _.map(client.phones, (phone) => { 
            return phone.numero
          }).toString().split(',').join(', ');
        }
        return client;
    });
  }

}
