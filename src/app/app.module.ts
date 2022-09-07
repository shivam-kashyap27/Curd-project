import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ViewUserComponent } from './view-user/view-user.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AuthGuard } from 'src/auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    LoginFormComponent,
    ViewUserComponent
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      progressBar:true,timeOut:1000
    }),
    BrowserAnimationsModule,


  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
