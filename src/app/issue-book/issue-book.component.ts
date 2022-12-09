import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {
  constructor(private api:ApiService){}
  name=""
  title=""
  document=""
  membership=""

  issueb =()=>
  {
    let data:any ={

      "name":this.name,
      "title":this.title,
      "document":this.document,
      "membership":this.membership
    
    }
    this.api.addIssue(data).subscribe(
      (generated:any)=>{
        console.log(generated)
      }
    )
    console.log(data)
  }

}
