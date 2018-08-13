import { NgModule } from "@angular/core";

import {ScrollDispatchModule} from '@angular/cdk/scrolling';


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
        ScrollDispatchModule
    ]
})
export class AppMaterial {}