import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  @Input() public name: string = 'DEFAULT';

  @Input() public counterValue: number = 1;

  @Input('step') public stepValue: number = 5;

  @Output() public showValue: EventEmitter<number> = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }

  public Increment() {
    this.counterValue = this.counterValue + this.stepValue;
  }

  public emit() {
    this.showValue.emit(this.counterValue);
  }

}
