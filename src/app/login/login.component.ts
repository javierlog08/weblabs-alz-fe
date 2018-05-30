import { Component } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';

import { MatDialog, MatDialogRef } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css' ]
})
export class LoginComponent {

    dialogRef: MatDialogRef<LoginFormComponent>;

    

    constructor(public dialog: MatDialog, public breakpointObserver: BreakpointObserver) {}

    ngOnInit() {
        let self = this;
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
        },500);
    }

    openDialog() : void {

        this.dialogRef = this.dialog.open(LoginFormComponent, {
            data: {},
            disableClose:true,
            maxWidth: '100%'
          });

          this.updateLoginLayout();

    }

    updateLoginLayout(width: string = "40%", height: string = "40%"): void {
        this.dialogRef.updateSize(width, height);
    }

}