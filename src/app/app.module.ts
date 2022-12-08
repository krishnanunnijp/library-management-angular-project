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
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { AddBookComponent } from './add-book/add-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http'
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
  },
  {
    path:"add",
    component: AddBookComponent
  },
  {
    path:"issue",
    component: IssueBookComponent
  },
  {
    path:"delete",
    component: DeleteBookComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    SignupComponent,
    UserLoginPageComponent,
    ViewBookComponent,
    SearchBookComponent,
    UserNavbarComponent,
    AddBookComponent,
    IssueBookComponent,
    DeleteBookComponent,
    AdminNavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
