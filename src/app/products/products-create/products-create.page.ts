import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products';
import { ApiProductService } from '../../services/api-products.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.page.html',
  styleUrls: ['./products-create.page.scss'],
})
export class ProductsCreatePage implements OnInit {

  data: Products

  constructor(public apiProductService: ApiProductService, public router: Router, public toastController: ToastController,) {
    this.data = new Products();
  }
  ngOnInit() {
  }

  submitForm() {
    this.apiProductService.createItem(this.data).subscribe((response) => {
      this.presentToast("successfully created product")
      this.router.navigate(['products/'+ response.id]);
    });
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
