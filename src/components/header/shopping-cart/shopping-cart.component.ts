import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {ProductService} from '../../../services/product-service'
@Component({
    selector: 'shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
  })
  export class ShoppingCartComponent implements OnInit {
  
    faShoppingCart = faShoppingCart;
    isBatchVisible = false;
    selectedProductListCount = 0;
    constructor(private productService:ProductService){

    }

    ngOnInit(){
      this.productService.productListUpdates$.subscribe((selectedProductList)=>{
        if(selectedProductList.length>0){
          this.isBatchVisible = true;
        }else{
          this.isBatchVisible = false;
        }
        this.selectedProductListCount = selectedProductList.length;
      })
    }

    
  }