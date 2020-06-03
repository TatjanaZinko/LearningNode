import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, UrlTree } from '@angular/router';
import { DataSourceService } from 'src/app/data-source.service';
import { Product } from 'src/app/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  public productForm: FormGroup;
  public mode: string;
  public product: Product;
  public submited: boolean = false;

  constructor(private router: Router,
              private dataSourseService: DataSourceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { 
    this.productForm = new FormGroup({
      name: new FormControl(''),
      category: new FormControl(''),
      desc: new FormControl(''),
      price: new FormControl(''),
    });

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.mode = params.get('mode');

      if(this.mode === 'create') {      
  
      } else if(this.mode === 'edit') {
             
        const productId = +params.get('id');

        this.dataSourseService.getProductById(productId).subscribe((product: Product) => {
            this.product = product;

            this.productForm.get('name').setValue(this.product.name);
            this.productForm.get('category').setValue(this.product.category);
            this.productForm.get('desc').setValue(this.product.desc);
            this.productForm.get('price').setValue(this.product.price);
            
        })
       
      }
    })

    

   
  }

  public submit():void {
      if(this.productForm.valid) {
        
        const product = new Product(
          this.productForm.get('name').value,
          +this.productForm.get('price').value,
          this.productForm.get('desc').value,
          this.productForm.get('category').value,
          (this.mode === 'edit') ? this.product.id : undefined
        );

        if (this.mode === 'create') {
          this.dataSourseService.createProduct(product).subscribe(() => {
            this.goToProductList();
          });

        } else if(this.mode === 'edit') {
          this.dataSourseService.editProduct(product).subscribe(() => {
            this.goToProductList();
          });
        }


      } else {
        alert('Form invalid');
      }
  }

  public goToProductList() {
    this.router.navigate(['/admin/home/product']);
  }

  public CanDeactivate(): Observable<boolean | UrlTree> |boolean | Promise<boolean>  {
    let hasChanges = false;

    if(this.mode === 'create') {
       hasChanges = this.productForm.get('name').valid ||
                      this.productForm.get('category').valid ||
                      this.productForm.get('desc').valid ||
                      this.productForm.get('price').valid;

            
    } else if (this.mode === 'edit') {
      hasChanges = this.product.name !== this.productForm.get('name').value ||
                  this.product.category !== this.productForm.get('category').value ||
                  this.product.desc !== this.productForm.get('desc').value ||
                  this.product.price !== this.productForm.get('price').value;
    }

    if (hasChanges && this.submited === false) {
      return confirm('Are you shure?')
    } else {
      return true;
    }
  } 
}
