import { NgModule } from "@angular/core";

import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { OverlayModule } from "../../node_modules/@angular/cdk/overlay";

import { 
    MatDialogModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSidenavModule, 
    MatProgressSpinnerModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatMenuModule, 
    MatListModule, 
    MatCardModule, 
    MatTableModule,
    MatTabsModule,
} from "@angular/material";


@NgModule ({
    exports: [
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatTableModule,
        MatTabsModule,
        ScrollDispatchModule,
        OverlayModule
    ]
})
export class AppMaterial {}