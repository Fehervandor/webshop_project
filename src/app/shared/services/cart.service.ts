import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Image } from 'src/app/models/Image';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    cartCollection?: AngularFirestoreCollection<Image>;
    items?: Observable<any>;


  constructor(private afs: AngularFirestore) {
    this.cartCollection = this.afs.collection('Cart');
    this.items = this.afs.collection('Cart').valueChanges();
   }

   getItems() {
     return this.items;
   }

  addImage(image: Image) {
    this.cartCollection?.add(image);
  }


}
