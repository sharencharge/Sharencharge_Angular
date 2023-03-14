import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AccessGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    const requiresLogin = route.data["requiresLogin"] || false;
    if (requiresLogin) {
      if (localStorage.getItem("id") != null) {
        return true;
      }
    }
    return false;
  }
}