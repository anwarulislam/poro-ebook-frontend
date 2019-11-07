import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoggedGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router, ) { }

    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // this.router.navigate(['/dashboard'])
        return !this.auth.isAuthenticated()
    }
}
