import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chupter',
  templateUrl: './chupter.component.html',
  styleUrls: ['./chupter.component.scss']
})
export class ChupterComponent implements OnInit {

  @Input() public name: string = 'DEFAULT';

  public counterValue: number = 1

  constructor() { }

  ngOnInit(): void {
  }

  public increment(): void {
    this.counterValue = this.counterValue + 1;
  }

}
