import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent {
  username=""
  password=""
  data1:any=[]
  constructor(private route:Router,private api:ApiService){}
  userlog =()=>
  {
    let data:any={
      "username":this.username,
      "password1":this.password

    }
    console.log(data)
    this.api.searchUser(data).subscribe(
      (generated:any)=>{
        this.data1=generated
        console.log(this.data1)

        if(this.data1.length!=0){
          this.route.navigate(['/view'])
        }else{
          alert("invalid login")
        }

      }
      

    )




  }
}
