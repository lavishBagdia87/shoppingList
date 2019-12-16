import { Component,Input } from '@angular/core';
import { Product } from '../../models/product';
import {SelectedProduct} from '../../models/selectedProcut'
import {ProductService} from '../../services/product-service'
import {faRupeeSign}  from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private productService:ProductService){

  }

  @Input() product: Product;
  faRupeeSign = faRupeeSign;
  priceAfterDiscount(actualPrice:number,discount:number){

    return actualPrice - (actualPrice*discount/100);
  }
   
  addToCart(product:Product){
    let tempSelectedProduct:any = product;
    tempSelectedProduct.count  = 1;
    let Selectedproduct:SelectedProduct = tempSelectedProduct;
    this.productService.addSelectedProducts(Selectedproduct);
  }
}

