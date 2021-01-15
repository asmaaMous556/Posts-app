import { PostsService } from './../../services/posts.service';
import { post } from './../../models/post';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
posts:any[];
post:any;
isVisible = false;
postId: string;
  constructor(private postService :PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts=>{
      this.posts=posts.map(post=>{
        return{
          id:post.payload.doc.id,
          title:post.payload.doc.data()['title'],
          body:post.payload.doc.data()['body']
        }
    })
    //  console.log(this.posts);
    })
  }


  handleCancel(){
    this.isVisible = false;
  }
  handleOk(){
    this.isVisible=false;
  }

  getPost(postId:string){
    this.postService.getPostById(postId).subscribe(post=>{
      this.post=post 
    })

    this.isVisible=true;
    localStorage.setItem('postId',postId);
    // console.log(postId);
  }

  update(postId,post:post){
  postId=localStorage.getItem('postId')
 this.postService.updatePost(postId,post);
 this.isVisible=false;
//  console.log(postId);
//  console.log(post);
  }

  Delete(id:string){
this.postService.deletePost(id);
  }
}
   
  

