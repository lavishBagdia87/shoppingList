import { Component,OnInit, Input } from '@angular/core';
import {ProductService} from '../../services/product-service';
import { Product } from '../../models/product'

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  products:Product[];
  @Input() sortBy:number;
  @Input() filterDetails:any;
  constructor(private productService:ProductService){

  }

  ngOnInit(){
    this.getProducts();
  }

  getProducts():void{
    this.productService.getProducts().subscribe(products=>{
        this.products = products;
      });
  }
  
}