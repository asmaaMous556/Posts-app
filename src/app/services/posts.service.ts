import { AuthService } from 'src/app/services/auth.service';
import { post } from './../models/post';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afStore:AngularFirestore,private auth:AuthService) { 
    
  }
  post(post:post){
   return  this.afStore.collection('/users/'+this.auth.userId+'/posts').add(post);

  }

  getPosts(){
  return this.afStore.collection('/users/'+this.auth.userId+'/posts').snapshotChanges();
  }

  getPostById(postId:string){
    return this.afStore.doc('users/'+this.auth.userId+'/posts/'+postId).valueChanges();
  }

  updatePost(PostId:string,post:post){
    return this.afStore.doc('/users/'+this.auth.userId+'/posts/'+PostId).update(post);

  }
  deletePost(postId:string){
return this.afStore.doc('/users/'+this.auth.userId+'/posts/'+postId).delete();

  }

  getAll(userId:string){
    return this.afStore.collection('/users/'+userId+'/posts').snapshotChanges();
  }
}
