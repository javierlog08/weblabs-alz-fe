import { NgModule } from "@angular/core";
import { MatDialogModule, MatButton, MatButtonModule, MatFormFieldModule, MatInputModule } from "@angular/material";

@NgModule ({
    exports: [
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class AppMaterial {}