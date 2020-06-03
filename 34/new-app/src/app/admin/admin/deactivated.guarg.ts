import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface Deactivate {
    canDeactivate(): Observable<boolean | UrlTree> |boolean | Promise<boolean> 
}

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<Deactivate> {
    canDeactivate(component: Deactivate): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        return component.canDeactivate();
    }
  
    
}