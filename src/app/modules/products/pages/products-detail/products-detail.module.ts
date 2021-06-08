import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsDetailPageRoutingModule } from './products-detail-routing.module';

import { ProductsDetailPage } from './products-detail.page';

import { MultiFileUploadComponent } from '../../components/multi-file-upload/multi-file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsDetailPageRoutingModule,
    FileUploadModule,
  ],
  declarations: [ProductsDetailPage, MultiFileUploadComponent]
})
export class ProductsDetailPageModule {}
