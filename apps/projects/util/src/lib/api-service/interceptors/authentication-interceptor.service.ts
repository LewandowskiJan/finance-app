import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, filter, finalize, switchMap, take } from 'rxjs/operators';

import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

// todo: waiting for authorization micro-service will work
@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  private AUTH_HEADER = 'Authorization';
  private token = 'secrettoken';
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    request = this.addAuthenticationToken(request);

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error && error.status === 401) {
          if (this.refreshTokenInProgress) {
            return this.refreshTokenSubject.pipe(
              filter((result) => result !== null),
              take(1),
              switchMap(() => next.handle(this.addAuthenticationToken(request)))
            );
          } else {
            this.refreshTokenInProgress = true;
            this.refreshTokenSubject.next(null);

            return this.refreshAccessToken().pipe(
              switchMap((success: boolean) => {
                this.refreshTokenSubject.next(success);
                return next.handle(this.addAuthenticationToken(request));
              }),
              finalize(() => (this.refreshTokenInProgress = false))
            );
          }
        } else {
          return throwError(error);
        }
      })
    );
  }

  private refreshAccessToken(): Observable<any> {
    return of('secret token');
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    if (!this.token) {
      return request;
    }

    return request.clone({
      headers: request.headers.set(this.AUTH_HEADER, 'Bearer ' + this.token),
    });
  }
}
