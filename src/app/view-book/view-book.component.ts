import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent {
  data :any=[
  ]
  constructor(private api:ApiService){
    api.fetchBook().subscribe(
      (generated:any)=>{
        this.data=generated
      }
    )
  }


}
