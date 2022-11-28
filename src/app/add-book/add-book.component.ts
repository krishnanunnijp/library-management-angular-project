import { Component } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  title=""
  image=""
  description=""


  readValue=()=>
  {
    let data: any =    {
      "title":this.title,
      "image": this.image,
      "description":this.description
      
    }
    console.log(data)
  }

}
