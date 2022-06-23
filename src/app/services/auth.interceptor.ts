import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let authUrl = "https://127.0.0.1:8000/authentication_token";

    if (request.url !== authUrl) {
      const tokm2iflix = localStorage.getItem('tokm2iflix');
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${tokm2iflix}`
        }
      })
    }
    return next.handle(request);
  }
}
