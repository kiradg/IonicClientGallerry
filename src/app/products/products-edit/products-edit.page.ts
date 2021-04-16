import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products';
import { ApiProductService } from '../../services/api-products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.page.html',
  styleUrls: ['./products-edit.page.scss'],
})
export class ProductsEditPage implements OnInit {
  
  id: number;
  data: Products;
  
  constructor(public activatedRoute: ActivatedRoute, public router: Router, public apiProductService: ApiProductService) {
    this.data = new Products();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiProductService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  update() {
    //Update item by taking id and updated data object
    this.apiProductService.updateItem(this.id, this.data).subscribe(response => {
      this.router.navigate(['products']);
    })
  }

}
