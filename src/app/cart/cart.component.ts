import { Component, OnInit } from '@angular/core';
import { Image } from '../models/Image';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  orders?: Image[];


  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getItems()?.subscribe(items => {
        this.orders = items;
    })
  }

}
