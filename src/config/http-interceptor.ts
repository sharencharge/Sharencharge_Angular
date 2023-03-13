import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // localStorage.setItem('tokenJWT', value);
    console.log("interceptor !");
    
    let token: string | null = localStorage.getItem('jwtToken');
    if (token !== null) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    console.log(request);
    return next.handle(request);
  }
}