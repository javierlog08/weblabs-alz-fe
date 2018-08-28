import { Injectable, Component, ViewContainerRef, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoaderComponent } from './loader.component';
import { Overlay, FlexibleConnectedPositionStrategy, ConnectedPositionStrategy} from '../../../../node_modules/@angular/cdk/overlay';
import { ComponentPortal } from '../../../../node_modules/@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {


  constructor(public dialog: MatDialog, private overlay:Overlay) { }

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

  attachLoader(elementRef: ElementRef) : void {

    const fcps:FlexibleConnectedPositionStrategy = this.overlay.position().flexibleConnectedTo(elementRef);
    const cps:ConnectedPositionStrategy = this.overlay.position().connectedTo(elementRef,{
      originX:'center',
      originY: 'top'
    },{
      overlayX:'center',
      overlayY: 'top'
    });

    fcps.withPositions([
      { originX:'start',originY:'top',overlayX:'start', overlayY:'top' }
    ]);

    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: cps
    });

    const loaderPortal = new ComponentPortal(LoaderComponent);
    overlayRef.attach(loaderPortal);

  }

  closeLoader():void {
    this.dialogRef.close();
  }
}
