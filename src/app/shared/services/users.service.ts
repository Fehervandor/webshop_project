import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersCollection?: AngularFirestoreCollection<User>

  constructor(public afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('Users');
   }

   addItem(user: User) {
    this.usersCollection?.add(user);
   }

}
