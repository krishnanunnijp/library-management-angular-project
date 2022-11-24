import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
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
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    SignupComponent,
    UserLoginPageComponent

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
