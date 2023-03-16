import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AccessGuard implements CanActivate {

  constructor(private router : Router) {
    
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    const requiresLogin = route.data["requiresLogin"] || false;
    if (requiresLogin) {
      console.log(localStorage.getItem("id"));
      
      if (localStorage.getItem("id") != null) {
        return true;
      }
    }
    console.log("guard");
    
    this.router.navigate(['/']);
    return false;
  }
}