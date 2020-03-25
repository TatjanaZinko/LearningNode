import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TableService } from '../table.service';
import { Product } from '../table-host/product.model';

@Component({
  selector: 'app-product-detailed',
  templateUrl: './product-detailed.component.html',
  styleUrls: ['./product-detailed.component.scss']
})
export class ProductDetailedComponent implements OnInit {

  public product: Product;
  private id: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private tableService: TableService ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
        this.id = +params.get('id');
        this.tableService.getProduct(this.id).subscribe((product: Product) => {
          this.product = product;
        })
    })
    
    this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      console.log(params.get('name'), params);
    })
  }

  public goBack() {
    this.router.navigate(['../', {id: this.id}], {relativeTo: this.activatedRoute});
  }

}
