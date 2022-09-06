import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth/auth.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {path:'',component:LoginFormComponent},
  {path:'viewUser', canActivate:[AuthGuard] ,component:ViewUserComponent},
  {path:'addUser',canActivate:[AuthGuard],component:AddUserComponent},
  {path:'addUser/:id',canActivate:[AuthGuard],component:AddUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
