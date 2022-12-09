import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private api:ApiService){}
  name=""
  adhar=""
  address=""
  pincode=""
  dob=""
  email=""
  phonenumber=""
  username=""
  password1=""
  password2=""
  signup =()=>
  {
    let data:any ={
      "name":this.name,
      "adhar":this.adhar,
      "address":this.address,
      "pincode":this.pincode,
      "dob":this.dob,
      "email":this.email,
      "phonenumber":this.phonenumber,
      "username":this.username,
      "password1":this.password1

    }
    console.log(data)
    this.api.addUser(data).subscribe(
      (generated:any)=>{
        console.log(generated)
        if(generated.status=="success"){
          alert("added")
          this.name=""
          this.adhar=""
          this.address=""
          this.pincode=""
          this.dob=""
          this.email=""
          this.phonenumber=""
          this.username=""
          this.password1=""
          this.password2=""
        }else{
          alert("something went wrong")
        }
      }
    )
  }

}
