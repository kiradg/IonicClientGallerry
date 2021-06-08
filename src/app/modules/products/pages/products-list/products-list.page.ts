import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
})
export class ProductsListPage implements OnInit {
  productsData: any;

  constructor(public productService: ProductService) {
    this.productsData = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.list().subscribe(response => {
      this.productsData = response;
    })
  }


  delete(item) {
    this.productService.delete(item.id).subscribe(Response => {
      this.getAllProducts();
    });
  }

}
