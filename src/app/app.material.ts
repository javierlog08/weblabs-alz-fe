import { NgModule } from "@angular/core";
import { MatDialogModule, MatButton, MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule } from "@angular/material";

@NgModule ({
    exports: [
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
    ]
})
export class AppMaterial {}