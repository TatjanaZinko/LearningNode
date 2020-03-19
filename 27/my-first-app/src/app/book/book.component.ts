import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public chapterName: string = 'Chapter 2';

  public value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public show(event: number) {
    this.value = event;
  }

}
