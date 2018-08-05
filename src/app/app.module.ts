import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AmountComponent } from './amount/amount.component';
import {Products} from "./products";
import {ProductsService} from "./products.service";
import { AppRoutingModule } from './/app-routing.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    AmountComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
