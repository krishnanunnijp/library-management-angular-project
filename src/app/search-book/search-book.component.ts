import { Component } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {
  title=""

  searchb=()=>
  {
    let data:any={
    "title":this.title
    }
    console.log(data)

  }

}
