import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Image } from '../models/Image';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartService } from '../shared/services/cart.service';
import { GalleryService } from '../shared/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  variable?: string;
  items?: Image[];
  jeans_items?: Image[];


  constructor(private galleryService: GalleryService, private cartService: CartService, private router: Router) { }
  
  saveValue(value: string) {
    this.variable = value;
  }

  ngOnInit() {
    this.galleryService.getItems().subscribe(items => {
      this.items = items;
    });

    this.galleryService.getJeansItems().subscribe(items => {
      this.jeans_items = items;
    })
  }


  addToCart(num: Image) {
    this.cartService.addImage(num);
    this.router.navigate(['/cart']);
  }


  ngOnChanges(): void {
  
  }


}
