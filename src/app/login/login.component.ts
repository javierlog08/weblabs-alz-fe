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

    ngOnInit() {
        /*let self = this;
        // To avoid this bug --> https://github.com/angular/material2/issues/5268
        setTimeout(function() {

            self.openDialog();

            // To resize full screen dialog on mobile devices
            const layoutChanges = self.breakpointObserver.observe([
                '(max-width: 599px)'
              ]);
    
              layoutChanges.subscribe(result => {
                  if(result.matches){
                      self.updateLoginLayout("100%", "100%");
                  } else {
                    self.updateLoginLayout();
                  }
              });
        },500);*/
    }

    updateLoginLayout(width: string = "40%", height: string = "40%"): void {
    }

}