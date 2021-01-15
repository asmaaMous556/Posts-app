
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user:user;
  constructor(private fs:AngularFirestore) { }

  adduser(user:firebase.default.User){
  return  this.fs.doc('users/'+user.uid).set({
      id:user.uid,
      name:user.displayName,
      email:user.email
    })
  }

  getUser(uid:string){
   return this.fs.doc('users/'+uid).valueChanges();
  }
  getAllUers(){
    return this.fs.collection('/users').snapshotChanges();
  }
}
