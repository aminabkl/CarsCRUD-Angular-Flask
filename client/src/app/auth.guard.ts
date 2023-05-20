import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  private jwt: string | null;

  constructor(private router: Router) {
    this.jwt = localStorage.getItem('jwt');
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.jwt = localStorage.getItem('jwt');
    if (this.jwt === null) {
      return this.router.navigate(['/']);
    }
    return true;
  }
}
