import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUserAuthData = JSON.parse(localStorage.getItem('usersForChat'));
        if (currentUserAuthData) {

            request = request.clone({
                setHeaders: {
                    'Authorization': `Basic ${currentUserAuthData}`
                }
            });
        }

        return next.handle(request);
    }
}