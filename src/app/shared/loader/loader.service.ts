import { Injectable, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoaderComponent } from './loader.component';
import { Overlay, FlexibleConnectedPositionStrategy,OverlayContainer, OverlayRef} from '../../../../node_modules/@angular/cdk/overlay';
import { ComponentPortal } from '../../../../node_modules/@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private _isLoaderOpen : boolean = false;

  constructor(public dialog: MatDialog, private overlay:Overlay, private overlayContainer:OverlayContainer) { }

  private dialogRef:MatDialogRef<LoaderComponent> = null;
  
  private overlayRef: OverlayRef;
  

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

  openBodyLoader() : void {

    if(!this._isLoaderOpen) {
      this.dialogRef = this.dialog.open(LoaderComponent, {
        panelClass: 'loader-component',
        data: {},
        disableClose: true
      });

      this._isLoaderOpen = true
  
      this.overlayContainer.getContainerElement().setAttribute('style', 'margin-top:60px');
    }
    
  }

  attachLoader(elementRef: ElementRef) : void {

    const fcps:FlexibleConnectedPositionStrategy = this.overlay.position().flexibleConnectedTo(elementRef);

    if(!this._isLoaderOpen) {
      fcps.withPositions([
        { originX:'center',originY:'top',overlayX:'center', overlayY:'top' }
      ]);
        this.overlayRef = this.overlay.create({
        hasBackdrop: true,
        positionStrategy: fcps
      });
  
      const loaderPortal = new ComponentPortal(LoaderComponent);
      this.overlayRef.attach(loaderPortal);
  
      this._isLoaderOpen = true;
    }

    

  }

  detachLoader() {
    this.overlayRef.detach();
    this._isLoaderOpen = false;
  }
  
  closeLoader():void {
    this.dialogRef.close();
    this._isLoaderOpen = false;
  }
}
