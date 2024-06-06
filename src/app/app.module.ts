import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FatturaComponent } from './components/fattura/fattura.component';



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
  },

];
@NgModule({
  declarations: [AppComponent, HomeComponent, NavBarComponent,RegisterComponent, LoginComponent, ClienteComponent, FatturaComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
