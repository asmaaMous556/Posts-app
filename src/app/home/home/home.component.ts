import { user } from './../../models/user';

import { UserService } from './../../services/user.service';
import { post } from './../../models/post';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
post:post
posts:any;
userId:any;
userName:string;
users:any
postId:string;
  constructor(private postService :PostsService,private userService:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  //  this.route.queryParamMap.subscribe(postId=>{
  //    this.postId=postId.get('id');
  //  })
  //  console.log(this.postId);
  //  if(this.postId) {
  //    this.postService.getPostById(this.postId).subscribe(post=>{
  //      this.post=post
  //    })
  //    console.log(this.post)
  //  }


     this.userService.getAllUers().subscribe(users=>{
        this.users=users.map(user=>{
          return {
            userId:user.payload.doc.id,
            userName:user.payload.doc.data()['name'],
          }
          
        })
       
        //console.log(this.users);
        .forEach(user=>{
          this.userId=user.userId,
          this.userName=user.userName
         // console.log(user)
        })
        this.postService.getAll(this.userId).subscribe(posts=>{
          this.posts=posts.map(post=>{
            return{
              id:post.payload.doc.id,
              title:post.payload.doc.data()['title'],
              body:post.payload.doc.data()['body']
            }
        })
        console.log(this.posts);
        })
        
     //  console.log(this.userId);
      
     })

      
    
  }

  
 addPost(post){
  //  if(this.postId){
  //    this.postService.updatePost(this.postId,post)
  //  }
  // else{
    this.postService.post(post);
   console.log(post);
   
 }
}
 

    
 