import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        //console.log(this.auth.isAuthenticated())
        if (this.auth.isAuthenticated()) { return true }

        // Store the attempted URL for redirecting
        this.auth.redirectUrl = url;
        console.log(this.auth.redirectUrl)

        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    }
}