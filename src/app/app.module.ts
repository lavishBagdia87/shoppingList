import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule }   from '@angular/forms';

import { HeaderComponent } from 'src/components/header/header.component';
import { ProductListComponent } from 'src/components/product-list/product-list.component';
import { SortingComponent } from 'src/components/sorting/sorting.component';
import { ProductComponent } from 'src/components/product/product.component';
import { SearchComponent } from 'src/components/header/search/search.component';
import { ShoppingCartComponent } from 'src/components/header/shopping-cart/shopping-cart.component';
import { FilterComponent } from 'src/components/filter/filter.component';
import { Filter } from "src/pipes/filter.pipe";
import {Sort} from 'src/pipes/sort.pipe' 
import { CartProductComponent } from 'src/components/cart-detail/cart-product/cart-product.component';
import { CardDetailsComponent } from 'src/components/cart-detail/cart-detail.component';
import { HomeComponent } from 'src/components/home/home.component';
import { PriceDetailComponent } from 'src/components/cart-detail/price-detail/price-detail.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,SortingComponent,ProductListComponent,ProductComponent,SearchComponent,ShoppingCartComponent,FilterComponent,Filter,Sort,CartProductComponent,CardDetailsComponent,HomeComponent,PriceDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    Ng5SliderModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
