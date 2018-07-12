import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './shared/auth.service';
import { MainComponent } from './main/main.component';

export const AppRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate:[AuthService] },
    { path: 'main', component: MainComponent, canActivate:[AuthService] },
    { path: '',   redirectTo: '/main', pathMatch: 'full' },
]
