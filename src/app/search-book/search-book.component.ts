import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {
  title=""
  data:any=[]
constructor(private api:ApiService){
api.fetchBook().subscribe(
  (gwnerated:any)=>
  {
    this.data=gwnerated
  }
)
}
  searchb=()=>
  {
    let data1:any={
    "title":this.title
    }
    console.log(data1)
    this.api.searchBook(data1).subscribe(
      (generated:any)=>{
        if(generated.length){
        this.data=generated
        console.log(generated)}else{
          alert("not found")
        }

      }
    )

  }

}
