import { HomeComponent } from '../home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';

export const publicRoutes: Routes = [
    { path: '', component: HomeComponent , pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
];
