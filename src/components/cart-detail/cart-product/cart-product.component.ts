import { Component,Input } from '@angular/core';
import {SelectedProduct} from '../../../models/selectedProcut'
import {ProductService} from '../../../services/product-service'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import {faRupeeSign}  from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent {
    faPlusCircle = faPlusCircle;
    faMinusCircle = faMinusCircle;
    faRupeeSign = faRupeeSign;
  constructor(private productService:ProductService){
    

  }
  @Input() product: SelectedProduct;

  priceAfterDiscount(actualPrice:number,discount:number){
    return actualPrice - (actualPrice*discount/100);
  }
   
  increaseCount(product:SelectedProduct){
    product.count++;
    this.productService.updateProductCount(product);
  }
  
  decreaseCount(product:SelectedProduct){
    product.count--;
    if(product.count ===0){
        this.productService.removeSelectedProducts(product);
    }else{
      this.productService.updateProductCount(product);
    }
  }
  remove(product:SelectedProduct){
    this.productService.removeSelectedProducts(product);
  }

}

