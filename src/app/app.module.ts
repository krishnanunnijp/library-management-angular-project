import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
const myRoute: Routes =[
  {
    path:"",
    component: AdminLoginComponent
  },
  {
    path:"signup",
    component: SignupComponent
  },
  {
    path:"user",
    component: UserLoginPageComponent
  },
  {
    path:"view",
    component: ViewBookComponent
  },
  {
    path:"search",
    component: SearchBookComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    SignupComponent,
    UserLoginPageComponent,
    ViewBookComponent,
    SearchBookComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
