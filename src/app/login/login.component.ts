import { Component } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';

import { MatDialog, MatDialogRef } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.scss' ]
})
export class LoginComponent {

    constructor(public breakpointObserver: BreakpointObserver) {}

    ngOnInit() {}

}