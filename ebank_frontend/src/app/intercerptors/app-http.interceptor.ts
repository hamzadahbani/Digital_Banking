import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';     

@Injectable() 
export class AppHttpInterceptor implements HttpInterceptor {

  constructor (private authService: AuthService) {}
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!req.url.includes("/login")){
    let newReq = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + this.authService.accessToken)
    })
    return next.handle(newReq);
  } else {
    return next.handle(req);
    } 
  }
  }

