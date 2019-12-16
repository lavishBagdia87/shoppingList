import { Component,OnInit } from '@angular/core';
import {ProductService} from '../../services/product-service';
import { SelectedProduct } from '../../models/selectedProcut';

@Component({
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CardDetailsComponent implements OnInit{

  products:SelectedProduct[];
  constructor(private productService:ProductService){
  }

  ngOnInit(){
    this.getProducts();
    this.productService.getSelectedProducts();
  }

  getProducts():void{
    this.productService.productListUpdates$.subscribe((products)=>{
        this.products = products;
      });
  }
  
}