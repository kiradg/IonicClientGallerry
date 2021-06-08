import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsEditPageRoutingModule } from './products-edit-routing.module';

import { ProductsEditPage } from './products-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsEditPageRoutingModule
  ],
  declarations: [ProductsEditPage]
})
export class ProductsEditPageModule {}
