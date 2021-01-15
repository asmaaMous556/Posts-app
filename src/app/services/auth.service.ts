import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user:Observable<firebase.default.User>;
userId:string;
  constructor(private auth:AngularFireAuth) { 
    this.user=auth.user;
  }

  login(){
  return   this.auth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider())
  }

  logout(){
    return this.auth.signOut();
  }
}
