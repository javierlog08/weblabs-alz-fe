
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    styleUrls:['login-form.component.css']
  })
  export class LoginFormComponent{
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit() {
      
    }
  }
  