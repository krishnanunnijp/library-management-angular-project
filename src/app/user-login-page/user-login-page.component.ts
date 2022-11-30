import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent {
  username=""
  password=""
  constructor(private route:Router){}
  userlog =()=>
  {
    let data:any={
      "username":this.username,
      "password":this.password

    }
    if(data.username=="user" && data.password=="12345"){
      this.route.navigate(['/view'])
    }else{
      alert("invalid login")
    }
    console.log(data)

  }
}
