import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  Data:any=localStorage.getItem("loggedInUser")

  constructor(private http:HttpClient) { }
 url='http://localhost:3000/userDetails';

//  Get Data from json server
  getData()
  {
    return this.http.get(`${this.url}`);
  }
  postData(data:any){
    return this.http.post(`${this.url}`,data)
  }
  deleteData(id:number)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  currentData(id:number)
  {
    return this.http.get(`${this.url}/${id}`)
  }
  putData(id :number, data:string)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }
  isLoggedIn()
  {
    console.log(this.Data);
    return localStorage.getItem("loggedInUser")!=null;
  
  }
  
}
