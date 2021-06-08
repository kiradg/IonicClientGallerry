import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsCreatePageRoutingModule } from './products-create-routing.module';

import { ProductsCreatePage } from './products-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsCreatePageRoutingModule
  ],
  declarations: [ProductsCreatePage]
})
export class ProductsCreatePageModule {}
