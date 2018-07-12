import { NgModule } from "@angular/core";
import { MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatProgressSpinnerModule, MatToolbarModule, MatIconModule, MatMenuModule, MatListModule } from "@angular/material";

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
        MatListModule
    ]
})
export class AppMaterial {}