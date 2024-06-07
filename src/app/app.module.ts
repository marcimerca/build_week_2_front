import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FatturaComponent } from './components/fattura/fattura.component';
import { AuthGuard } from './auth/auth.guard';
import { ClienteDetailsComponent } from './components/cliente-details/cliente-details.component';



const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  
  },
  {
    path: 'clienti',
    component: ClienteComponent,
    canActivate: [AuthGuard],
    
  },
  {
    path: 'fatture',
    component: FatturaComponent,
    canActivate: [AuthGuard],
    
  },
   {
    path: 'clienti/:id',
    component: ClienteDetailsComponent,
    canActivate: [AuthGuard],
  },

];
@NgModule({
  declarations: [AppComponent, HomeComponent, NavBarComponent,RegisterComponent, LoginComponent, ClienteComponent, FatturaComponent, ClienteDetailsComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpClientModule],
    providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
