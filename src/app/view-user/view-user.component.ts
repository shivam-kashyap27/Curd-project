import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDetailsService } from '../services/user-details.service';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  
searchFilter:any;
// totalRecords:any='';
page:number=1;
  constructor(private userService:UserDetailsService,private toast:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.getUserData();
  }
  
showData:any='';
  getUserData()
  {
    this.userService.getData().subscribe((result)=>{
      console.log(result);
      this.showData=result
      // this.totalRecords=this.showData.length;
    })
  }
  deleteUserData(id:number)
  {
    this.userService.deleteData(id).subscribe((result)=>{
       console.log(result);
       this.getUserData();
       if(result)
       {
        this.toast.error("Data Deleted Succussfully","Deleted")
        // alert("Data Deleted Successfully!!")
       } else {
        alert ("Somthing Went Worng!!")
       }
    })
  }
  logOut()
  {
    localStorage.removeItem("loggedInUser");
    this.toast.success("Thank You","Logout Successfully!!!");
    this.router.navigate(['']);
  }
  
}
