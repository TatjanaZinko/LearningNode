import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TableService } from 'src/app/table.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {  

  public myForm: FormGroup;

   @Output() public addProduct: EventEmitter<Product> = new EventEmitter();

  constructor( private tableService: TableService ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup( {
      'id': new FormControl(null, [Validators.required, Validators.min(0)] ),
      'name': new FormControl(null, Validators.required ),
      'price': new FormControl(null, [Validators.required, Validators.min(0)] )
    })
  }

  public add() {    
       
      this.myForm.reset
   }

   public login(pass: string) {
     this.tableService.pass = pass;
   }

}
