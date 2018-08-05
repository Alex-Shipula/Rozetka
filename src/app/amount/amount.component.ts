import { Component, OnInit } from '@angular/core';
import {Products} from '../products';
import {ProductsService} from "../products.service";


@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {
    items: Products[] = [];

    counters = {};
    edd(product) {
        this.counters[product.id]++;
    }
    remove(product) {
        if(this.counters[product.id]>0){
          this.counters[product.id]--;
        }
        else{
          alert("Будьте внимательны!")
        }
    }

    constructor(private ProductsService:ProductsService ) { }

  ngOnInit() {
      this.items = this.ProductsService.getData();

      this.items.forEach(product => {
          this.counters[product.id] = 0;

      })

  }
  sum(product) {
      var result = product.price*this.counters[product.id];
      return result;
  }
  totalSum () {
      var countSum = 0;
      this.items.forEach(product => {
          countSum+=this.sum(product);
      })
        return countSum;
  }
}
