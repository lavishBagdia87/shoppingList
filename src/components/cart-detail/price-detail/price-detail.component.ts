import { Component,OnInit } from '@angular/core';
import {ProductService} from '../../../services/product-service';
import { SelectedProduct } from '../../../models/selectedProcut';
import {faRupeeSign}  from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'price-detail',
  templateUrl: './price-detail.component.html',
  styleUrls: ['./price-detail.component.scss']
})
export class PriceDetailComponent implements OnInit{
    products:SelectedProduct[];
    totalDiscount:number=0;
    totalPayable:number=0;
    faRupeeSign = faRupeeSign;
    constructor(private productService:ProductService){

    }
    ngOnInit(){
     this.productService.productListUpdates$.subscribe((products)=>{
       this.products = products;
       this.calculateTotalDiscount();
       this.calculateTotalPayable();
     }) 
     this.productService.getSelectedProducts();      

    }

    calculateTotalDiscount(){
      this.totalDiscount  = 0;
      for(let i=0; i<this.products.length; i++){
        let discountedPrice = this.products[i].count * (this.products[i].price - (this.products[i].price * this.products[i].discount/100));
        this.totalDiscount += (this.products[i].count * this.products[i].price) - discountedPrice;
      }
    }

    calculateTotalPayable(){
      this.totalPayable = 0;
      for(let i=0; i<this.products.length; i++){
        this.totalPayable += (this.products[i].count * this.products[i].price)  
      }
      this.totalPayable = this.totalPayable - this.totalDiscount; 
    }
    


}