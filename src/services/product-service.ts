import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import {SelectedProduct} from '../models/selectedProcut';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject }    from 'rxjs';
@Injectable({
    providedIn: 'root',
  })
export class ProductService {
  constructor(private http: HttpClient){}
  private productURL:string = 'https://api.myjson.com/bins/qzuzi';
  private selectedProducts:SelectedProduct[] = [];

 // Observable string sources
 private productListUpdates = new Subject<SelectedProduct[]>();
 productListUpdates$= this.productListUpdates.asObservable();
  getProducts():Observable<Product[]>{
      return this.http.get<Product[]>(this.productURL)
  }

  addSelectedProducts(product:SelectedProduct){
  let productAlreadyAdded =  this.selectedProducts.find((addedProduct)=>{
                                if(addedProduct.id === product.id){
                                  return addedProduct;
                                }
                              })
    if(!productAlreadyAdded){
          this.selectedProducts.push(product);
    }else{
      productAlreadyAdded.count++;
    }      
    this.productListUpdates.next(this.selectedProducts);
  }

  removeSelectedProducts(product:SelectedProduct){
    for(let i=0; i< this.selectedProducts.length; i++){
      if(this.selectedProducts[i].id === product.id){
        this.selectedProducts.splice(i, 1);  
        break;
      }
    }
    this.productListUpdates.next(this.selectedProducts); 
  }

  updateProductCount(product:SelectedProduct){
    for(let i=0; i< this.selectedProducts.length; i++){
      if(this.selectedProducts[i].id === product.id){
        if(product.count>0){
          this.selectedProducts[i] = Object.assign({},product);  
        }else{
          this.selectedProducts.splice(i, 1); 
        }
        break;
      }
    }
    this.productListUpdates.next(this.selectedProducts); 
  }

  getSelectedProducts(){
    this.productListUpdates.next(this.selectedProducts); 
  }
    

  


 
}