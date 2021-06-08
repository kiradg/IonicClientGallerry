import { Component, OnInit, ViewChild } from '@angular/core';
import { Products } from '../../../../core/models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { ProductService } from '../../../../core/services/products.service';
import { GalleryService } from '../../../../core/services/gallery.service';
import { ToastController } from '@ionic/angular';
import { MultiFileUploadComponent } from '../../components/multi-file-upload/multi-file-upload.component';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.page.html',
  styleUrls: ['./products-detail.page.scss'],
})

export class ProductsDetailPage implements OnInit {

  @ViewChild(MultiFileUploadComponent) fileField: MultiFileUploadComponent;
  productid: number;
  productdata: Products;
  galleryData: any;

  constructor(
    public actionSheetController: ActionSheetController,
    public activatedRoute: ActivatedRoute,
    public toastController: ToastController,
    public router: Router,
    public productService: ProductService,
    public galleryService: GalleryService,
  ) {
    this.productdata = new Products();
    this.galleryData = [];
  }

  ngOnInit() {
    this.productid = this.activatedRoute.snapshot.params["id"];
    this.productService.get(this.productid).subscribe(response => {
      this.productdata = response;
      this.getAllPictures();
    })
  }

  getAllPictures() {
    this.galleryService.list(this.productid).subscribe(response => {
      this.galleryData = response;
    })
  }

  receiveMessage($event) {
    let response = $event
    this.galleryData.push(response);
  }

  public async addPhotoToGallery() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        icon: 'folder',
        handler: () => {
          this.fileField.addFiles();
        }
      },
      {
        text: 'Use Camera',
        icon: 'camera',
        handler: () => {
          this.fileField.addImageCamera();
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  public async deletePhotoToGallery(idGallery, position) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.galleryService.delete(this.productid, idGallery).subscribe((response) => {
            this.galleryData.splice(position, 1);
            this.presentToast('Delete image in server');
          });
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => { }
      }]
    });
    await actionSheet.present();
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
