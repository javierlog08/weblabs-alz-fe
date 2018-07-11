import { NgModule } from "@angular/core";
import { MatDialogModule, MatButton, MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatProgressSpinnerModule } from "@angular/material";

@NgModule ({
    exports: [
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
        MatProgressSpinnerModule
    ]
})
export class AppMaterial {}