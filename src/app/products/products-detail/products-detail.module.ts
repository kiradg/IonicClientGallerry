import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsDetailPageRoutingModule } from './products-detail-routing.module';

import { ProductsDetailPage } from './products-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsDetailPageRoutingModule
  ],
  declarations: [ProductsDetailPage]
})
export class ProductsDetailPageModule {}
