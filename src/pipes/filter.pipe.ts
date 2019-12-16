
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({ name: 'filter' })
export class Filter implements PipeTransform {
    transform(products: Product[], filterObj: any): Product[] {
        if (!products)
            return [];
        if (!filterObj)
            return products;
        if (filterObj.type === "search") {
            let searchText = filterObj.searchText.toLowerCase();
            return products.filter(product => {
                return product.name.toLowerCase().includes(searchText);
            });
        }
        else if (filterObj.type === "priceRange") {
            let minPrice = filterObj.priceRange[0];
            let maxPrice = filterObj.priceRange[1];
            return products.filter(product => {
                if (product.price >= minPrice && product.price <= maxPrice) {
                    return product;
                }
            });
        }
    }
}
