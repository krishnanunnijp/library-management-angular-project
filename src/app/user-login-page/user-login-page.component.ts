import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent {
  username=""
  password=""

  userlog =()=>
  {
    let data:any={
      "username":this.username,
      "password":this.password

    }
    console.log(data)

  }
}
