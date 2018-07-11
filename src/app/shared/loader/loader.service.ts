import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoaderComponent } from './loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {


  constructor(public dialog: MatDialog) { }

  private dialogRef:MatDialogRef<LoaderComponent>;

  openLoader(): void {
    this.dialogRef = this.dialog.open(LoaderComponent, {
      panelClass: 'loader-component',
      data: {},
      disableClose: true
    });

    this.dialogRef.afterClosed().subscribe(result => {
      /* keeping this for future reference */
    });
  }

  closeLoader():void {
    this.dialogRef.close();
  }
}
