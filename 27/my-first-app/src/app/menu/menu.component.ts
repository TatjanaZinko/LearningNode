import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public item: string = 'same item';

  public menuList = [
    'Link 1',
    'Link 2',
    'Link 3',
    'Link 4',
    'Link 5',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
