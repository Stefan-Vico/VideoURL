import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUserAuthData = JSON.parse(localStorage.getItem('usersForChat'));
        if (currentUserAuthData) {
            return true;
        }

        this.router.navigate(['/user-details'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}