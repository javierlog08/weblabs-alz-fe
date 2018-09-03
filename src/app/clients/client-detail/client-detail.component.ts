import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../../node_modules/@angular/material';
import { _ } from 'underscore';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientDetailComponent implements OnInit {

  public client: any;

  constructor
  (@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<ClientDetailComponent>
) {

    let item = Object.assign({}, data); // clone data, avoid errors if you manipulate here 

    if(item.estado_civil){
      item.estado_civil = (item.estado_civil.toLowerCase() === 'x') ? 'No tiene' : (item.estado_civil.toLowerCase() === 'c') ? 'casado' : 'soltero';
    }
    
    if(item.sexo) {
      item.sexo = (item.sexo.toLowerCase() === 'x') ? 'No tiene' : (item.sexo.toLowerCase() === 'f') ? 'femenino' : 'masculino';
    }

    item.profesion = (item.profesion) ? item.profesion : 'No Tiene';

    item.addresses = _.map(item.addresses, function(add) {
      if(add && add.direccion){
        let tmp = add.direccion.split(':');
        return { title: tmp[0], body: tmp[1].split(',').join(' ').trim() }; 
      } 
     
    });
    
    this.client = item;
   }

  ngOnInit() {
    this.dialogRef.afterClosed().subscribe(result => {
      console.log("cerrado cliente");
      this.client = null;
    });
  }

}
