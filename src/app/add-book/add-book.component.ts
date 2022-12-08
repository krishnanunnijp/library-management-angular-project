import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  title=""
  image=""
  description=""
constructor(private api:ApiService){}

  readValue=()=>
  {
    let data: any =    {
      "title":this.title,
      "image": this.image,
      "description":this.description
      
    }
    this.api.addBook(data).subscribe(
      (generated:any)=>{
        console.log(generated)
        if(generated.status=="success"){
          alert("added successfully")
          this.title=""
          this.image=""
          this.description=""
        }else{
          alert("something worong")
        }
      }
    )
  }

}
