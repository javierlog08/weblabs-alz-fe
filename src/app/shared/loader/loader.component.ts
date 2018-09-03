import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'loader-component',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None // If we dont set this, we cant aply style on the modal @see -> https://angular.io/guide/component-styles#view-encapsulation
})
export class LoaderComponent implements OnInit {

  constructor() {}

  onNoClick(): void {
  }

  ngOnInit() {
  }

}
