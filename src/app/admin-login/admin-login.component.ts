import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  name=""
  password=""

  adminlog=()=>
  {
    let data:any ={
    "name":this.name,
    "password":this.password
  }
  console.log(data)
  }

}
