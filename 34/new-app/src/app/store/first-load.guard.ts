import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StoreComponent } from './store/store.component';

@Injectable({
  providedIn: 'root'
})
export class FirstLoadGuard implements CanActivate {
  private isFirstLoad: boolean = true;

  constructor(private router: Router) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean  {
    if(this.isFirstLoad) {
      this.isFirstLoad = false;

      if(next.component !== StoreComponent) {
        this.router.navigate(['/']);

        return false;
      }
    }
    return true;
  }
  
}
