import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private route:Router,private toast:ToastrService) { }

  ngOnInit(): void {
  }
    loginForm= new FormGroup({
     username:new FormControl('',[Validators.required]),
     password:new FormControl('',[Validators.required]),
    })  
    name:string='1111';
    key:any='1111';

    loginData(data :any)
    {
       console.log(data);
       if(this.name==data.username && this.key==data.password)
       {
       
        this.toast.success("Login Successfully!!","thank you")
          this.route.navigate(['viewUser'])
         let userInfo = (data.username + ' ' + data.password);
        //  console.log(userInfo,"INfo");
         
          localStorage.setItem("loggedInUser", JSON.stringify(userInfo));
       } else 
       {
        this.toast.error("Something went Wrong")
       }
      
    }
    get username()
    {
      return this.loginForm.get('username')
    }
    get password()
    {
      return this.loginForm.get('password')
    }
}
