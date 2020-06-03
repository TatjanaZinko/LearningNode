import { Injectable } from '@angular/core';

const LOGIN = 'admin';
const PASS= '123';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _isAuth: boolean = false;

  get isAuth(): boolean {
    return this._isAuth;
  }
  set isAuth(cond: boolean)  {
    this._isAuth = cond;
  }

  public login(login: string, pass: string): boolean {
      if(LOGIN === login && PASS === pass) {
          return this.isAuth = true;
      } else{
          return false;
      }
  }

  public logout(): void {
      this.isAuth = false;
  }
}