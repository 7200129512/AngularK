import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'Home',component:HomeComponent,pathMatch:'full'},
    {path:'login',component:LoginComponent,pathMatch:'full'},
    {path:'register',component:RegisterComponent,pathMatch:'full'},
    {path:'about',component:AboutComponent,pathMatch:'full'},
    {path:'contact',component:ContactComponent,pathMatch:'full'},
];
