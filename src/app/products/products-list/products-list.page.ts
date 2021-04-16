import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products';
import { ApiProductService } from '../../services/api-products.service';
import { Router } from '@angular/router';

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
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllProducts();
  }

  getAllProducts() {
    //Get saved list of students
    this.apiProductService.getList().subscribe(response => {
      this.productsData = response;
    })
  }


  delete(item) {
    //Delete item in Student data
    this.apiProductService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllProducts();
    });
  }
}
