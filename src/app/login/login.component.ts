import { Component } from '@angular/core';

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