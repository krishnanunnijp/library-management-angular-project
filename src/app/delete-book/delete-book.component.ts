import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {

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
  deleteBtnClick=(id:any)=>{
    let data1:any={"id":id}
    this.api.deleteBook(data1).subscribe(
      (generated:any)=>{
        console.log(generated)
        if(generated.status=="success"){
          alert("deleted successfully")
          this.data=[]
        }
      }
    )
  }
}
