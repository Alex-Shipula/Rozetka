import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Products} from '../products';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    @Input() data:Products;
  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private location: Location) {

  }

  ngOnInit(): void{
      this.data = this.getCurrentProduct();
  }
    getCurrentProduct(): Products {

        const id = +this.route.snapshot.paramMap.get('id');
        return this.productsService.getProducts(id)
    }

}
