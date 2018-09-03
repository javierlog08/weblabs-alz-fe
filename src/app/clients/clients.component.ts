import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { AppComponentInterface } from '../shared/app.component.interface';
import { ClientsService } from './clients.service';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { _ } from 'underscore';
import { LoaderService } from '../shared/loader/loader.service';
import { MatTabGroup, MatDialog } from '../../../node_modules/@angular/material';
import { Subscriber, Observable, Subscription } from '../../../node_modules/rxjs';
import { ClientDetailComponent } from './client-detail/client-detail.component';

var self = null;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, AppComponentInterface, AfterViewInit {
  
  title: string = "Clientes";
  hasSearch: boolean= true;
  searchPlaceHolder:string = "Introduce un nombre o numero de Indentidad y presiona <ENTER>...";

  clients = new Array();

  last_page = 1;
  lastScrollTop: number = 0;
  ITEMS_PER_PAGE: number = 15;
  searchTerm: string = "";

  runningService : Subscription;

  @ViewChild(MatTabGroup) clientTabs:MatTabGroup;
  

  constructor(
    private clientService: ClientsService, 
    private scrollDispatcher: ScrollDispatcher, 
    private ref: ChangeDetectorRef,
    private loader: LoaderService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    self = this;
    this._getClients(this.last_page, this.ITEMS_PER_PAGE, true);  
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

  searchHandler(event:any) {
    self.searchTerm = event.target.value;
    console.log(event.keyCode);
    if(event.keyCode === 13) {
      if(event.target.value.length > 0) {
        self._getClientsByTerm(event.target.value);
      } else {
        this._getClients(0, this.ITEMS_PER_PAGE);
      }
    }
  }

  openClientDetail(client) {
    const dialogRef = this.dialog.open(ClientDetailComponent,{
      width: '960px',
      position:{ top:'10px'},
      data: client,
      panelClass: 'client-detail'
    });
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

    if(this.runningService) {
      this.runningService.unsubscribe();      
    }

    this.loader.attachLoader(this.clientTabs._elementRef);

    this.runningService = this.clientService.getClientsByTerm(term).subscribe((res)=>{
      this.clients = res; 
      this._normalizePhoneNumbers(this.clients);
      this.ref.detectChanges();
      this.loader.detachLoader();
    });
  }

  private _getClients(start, offset, useLoader = false) {

    if(useLoader)
      this.loader.openBodyLoader();

    this.clientService.getClients(start, offset).subscribe((res)=> {
      this.clients = _.uniq(this.clients.concat(res)); // remove duplicates in case infinite scroll
      this._normalizePhoneNumbers(this.clients);
      if(this.ref)
        this.ref.detectChanges();

      if(useLoader)
        this.loader.closeLoader();
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
