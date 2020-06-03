import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private loginService: LoginService) { }

  ngOnInit(): void {
  }

  public logout() {
    this.loginService.logout();
    this.router.navigate(['/'])
  }

}
