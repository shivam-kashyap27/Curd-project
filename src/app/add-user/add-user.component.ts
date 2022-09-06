import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailsService } from '../services/user-details.service';
import { User } from '../model/user.model';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user : User=new User();
  changeValue:boolean=false;

  constructor(private userService:UserDetailsService, private route:Router, private router: ActivatedRoute, private toast:ToastrService) { }

  ngOnInit(): void {
    if(this.router.snapshot.params['id'])
    {
      this.currentUserData();
    }
  }
    
  addUser=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required, Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    address:new FormControl('',[Validators.required])
  })

  getFormData(data:any){
    if(!this.changeValue)
    {
      console.log(data);  
      this.userService.postData(data).subscribe((result)=>{
        // console.log(result);
        this.route.navigate(['viewUser']);
        if(result)
        {
          this.toast.success("Data Added Successfully","Data Added")
          // alert("Data Added Successfully!!!")
        } else {
          alert ("Something went wrong!!")
        }
        
      })
    } else
    {
      this.userService.putData(this.router.snapshot.params['id'],data).subscribe((result)=>{
        console.log(result);
        if(result)
        {
          this.toast.success("Data Updated Succussfully!!","Updated data")
          // alert("Data Updated Successfully!!")
        } else {
          alert ("Something Went Wrong")
        }
        this.route.navigate(['viewUser'])
      })
    }
  }
  currentUserData()
  {
    this.userService.currentData(this.router.snapshot.params['id']).subscribe((result)=>{
      console.log(result);
        this.user=result;
        this.changeValue=true;
    })
  }

 get username()
 {
  return this.addUser.get('username');
 }
 get password()
 {
   return this.addUser.get('password')
 }
 get email()
 {
 return this.addUser.get('email')
}
get phone()
 {
 return this.addUser.get('phone')
}
get address()
 {
 return this.addUser.get('address')
}

}