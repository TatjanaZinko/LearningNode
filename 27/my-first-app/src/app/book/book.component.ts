import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  public chapterName: string = 'Chapter 2';

  constructor() { }

  ngOnInit(): void {
  }

}
