
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({ name: 'sort' })
export class Sort implements PipeTransform {
    transform(products: Product[], sortId: number): Product[] {
        if (!products)
            return [];
        if (!sortId)
            return products;

        if (sortId === 1) {
            return products.sort((a, b)=>{
               
                const priceA = a.price - (a.price*a.discount/100)
                const priceB = b.price - (b.price*b.discount/100)
              
                let comparison = 0;
                if (priceA < priceB) {
                  comparison = 1;
                } else if (priceA > priceB) {
                  comparison = -1;
                }
                return comparison;
              });
        }
        else  if (sortId === 2) {
            return products.sort((a, b)=>{
              const priceA = a.price - (a.price*a.discount/100)
              const priceB = b.price - (b.price*b.discount/100)
            
              let comparison = 0;
              if (priceA > priceB) {
                comparison = 1;
              } else if (priceA < priceB) {
                comparison = -1;
              }
              return comparison;
            });
        }else if (sortId === 3) {
            return products.sort((a, b)=>{
              const discountA = a.discount
              const discountB = b.discount
            
              let comparison = 0;
              if (discountA < discountB) {
                comparison = 1;
              } else if (discountA > discountB) {
                comparison = -1;
              }
              return comparison;
            });
        }
        }
    }
