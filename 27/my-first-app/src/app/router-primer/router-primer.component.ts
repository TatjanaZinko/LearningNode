import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { Product } from '../table-host/product.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-router-primer',
  templateUrl: './router-primer.component.html',
  styleUrls: ['./router-primer.component.scss']
})
export class RouterPrimerComponent implements OnInit {

  public productList: Product[] = [];
  public currentId: number;

  constructor(
    private tableService: TableService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.tableService.getProducts().subscribe((products: Product[]) => {
      this.productList = products;
    });

    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.currentId = +param.get('id');
    })
  }

   public detailed (id: number): void {
    this.router.navigate([id], {relativeTo: this.activatedRoute});
  }

}
