import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public hasError: boolean = false;
  public wrongCredential: boolean = false;

  constructor(private router: Router,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    });
  }

  public login() { 
    this.hasError = false;
    this.wrongCredential = false;
    
    if(this.loginForm.valid) {
    const isAuth = this.loginService.login(
      this.loginForm.get('login').value,
      this.loginForm.get('pass').value
    );
        if(isAuth) {
          this.router.navigate(['/admin/home/product']);
        } else {
          this.wrongCredential = true;
        }


    } else {
      this.hasError = true;
    }
  }

  public goToStore() {
    this.router.navigate(['/']);
  }

}
