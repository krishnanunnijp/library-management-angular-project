import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchBook=()=>{
    return this.http.get("http://localhost:8080/")
  }
  addBook=(value:any)=>{
    return this.http.post("http://localhost:8080/add",value)
  }
  searchBook=(value:any)=>{
    return this.http.post("http://localhost:8080/search",value)
  }
}
