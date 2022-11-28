import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {
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
    console.log(data)
  }

}
