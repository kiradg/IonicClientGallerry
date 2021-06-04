import { Component, OnInit } from '@angular/core';
import { ApiProductService } from '../../services/api-products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
})
export class ProductsListPage implements OnInit {
  productsData: any;

  constructor(public apiProductService: ApiProductService) {
    this.productsData = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.apiProductService.getList().subscribe(response => {
      this.productsData = response;
    })
  }


  delete(item) {
    this.apiProductService.deleteItem(item.id).subscribe(Response => {
      this.getAllProducts();
    });
  }

}
