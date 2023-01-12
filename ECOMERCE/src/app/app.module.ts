import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ProductsModule } from './products/products.module';



@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ProductsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
