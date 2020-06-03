import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/data-source.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList: Product[] = [];

  constructor(private dataSourseService: DataSourceService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public createProduct() {
    this.router.navigate(['/admin/home/product/create']);
  }

  public editProduct(id: number) {
    this.router.navigate(['/admin/home/product/edit/' + id]);
  }

  public removeProduct(id: number) {
    this.dataSourseService.removeProduct(id).subscribe(() => {
      this.getProducts();
   })
 }

  private getProducts() {
    this.dataSourseService.getProducts().subscribe((products: Product[]) => {
      this.productList = products;
    })
  } 
}
