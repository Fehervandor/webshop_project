import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Image } from 'src/app/models/Image';
import { AngularFireStorage } from '@angular/fire/compat/storage'; 

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  itemsCollection?: AngularFirestoreCollection<Image>;
  items: Observable<any[]>;
  items_jeans: Observable<any[]>;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { 
    this.items = this.afs.collection('Images').valueChanges();
    this.items_jeans = this.afs.collection('Jeans_image').valueChanges();
  }

  getItems() {
    return this.items;
  }

  getJeansItems() {
    return this.items_jeans;
  }
  
 // getImage(url: string) {
  //  return this.storage.ref(url).getDownloadURL();
 // }

}
