import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';



@Injectable()
export class HttpInterceptorClass implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const request = req.clone({
    //        withCredentials: false
    //    });
    //const copiedReq = req.clone({headers: req.headers.set('', '')});
    //const copiedReq = req.clone({headers: req.headers.set('auth', this.authService.getToken())});
    return next.handle(req);
  }
}

