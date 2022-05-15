import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$ = authState(this.auth2);

  constructor(public auth: AngularFireAuth, public auth2: Auth) { }

  login(email: string, password: string) {
    return from(this.auth.signInWithEmailAndPassword(email, password));
  }

  signUp(name: string, email: string, password: string) {
    return from(this.auth.createUserWithEmailAndPassword(email, password))
  }

  logout() {
   return from(this.auth.signOut());
  // return this.auth.signOut();
  }

  isUserLoggedIn() {
    return this.auth.user;
  }


}
