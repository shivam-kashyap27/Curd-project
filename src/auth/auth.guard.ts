import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  res:any;
   constructor(private user:UserDetailsService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      
      if(this.user.isLoggedIn())
      {
  
        // this.route.navigate(['viewUser']) 
        return true;
      } 
      else{
        this.route.navigate(['/'])
        return false;
      }
      // this.user.Data.pipe(
      //   take(1),
      //   map(res=>{
      //    if(res){
      //      return true;
      //    }
      //    return this.route.createUrlTree(['/viewUser'])
      //    })
      // )
      // return false;   
    }
}
