import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './shared/auth.service';
import { MainComponent } from './main/main.component';
import { BooksComponent } from './books/books.component';

export const AppRoutes: Routes = [
    { 
        path: 'main', 
        component: MainComponent, 
        canActivate:[AuthService],
        children:[
            { path: '', component: HomeComponent },
            { path: 'books', component: BooksComponent },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '',   redirectTo: '/main', pathMatch: 'full' },
]
