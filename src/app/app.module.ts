import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { AppMaterial } from './app.material';
import { AuthService } from './shared/auth.service';

@NgModule({
  imports: [
    RouterModule.forRoot(
      AppRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterial
  ],
  exports:[],
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    HomeComponent
  ],
  entryComponents: [LoginFormComponent],
  bootstrap: [AppComponent],
  providers:[AuthService, LoginFormComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }