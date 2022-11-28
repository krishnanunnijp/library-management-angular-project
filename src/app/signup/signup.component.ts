import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
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
      "password1":this.password1,
      "password2":this.password2

    }
    console.log(data)
  }

}
