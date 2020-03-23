import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../table-host.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {

  @Output() public addProduct: EventEmitter<Product> = new EventEmitter();

  public myForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup(
      {
        id: new FormControl(null, [Validators.required, Validators.min(0)]),
        name: new FormControl(null, Validators.required),
        price: new FormControl(null, [Validators.required, Validators.min(0)])
      }
    );
  }

  public add(): void {
        this.addProduct.emit(null);
    }
  
} 
