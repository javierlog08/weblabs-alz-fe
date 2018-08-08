import { NgModule } from "@angular/core";

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
    MatTableModule
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
        MatTableModule
    ]
})
export class AppMaterial {}