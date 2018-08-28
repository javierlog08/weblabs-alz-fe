import { NgModule } from "@angular/core";

import { ScrollDispatchModule} from '@angular/cdk/scrolling';
import { OverlayModule } from "../../node_modules/@angular/cdk/overlay";
import { PortalModule } from "../../node_modules/@angular/cdk/portal";

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
        OverlayModule,
        PortalModule
    ]
})
export class AppMaterial {}