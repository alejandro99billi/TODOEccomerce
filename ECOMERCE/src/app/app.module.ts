import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './pages/home/home.module';
import { CustomerModule } from './pages/customer/customer.module';



@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   ProductsModule,
   HomeModule,
   CustomerModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
