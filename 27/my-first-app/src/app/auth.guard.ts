import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TableService } from './table.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private tableService: TableService ) {
    
  }
  canActivate():  boolean  {
    if (this.tableService.pass) {
      return true;
    } else {
      return false;
    }
  }
  
}
