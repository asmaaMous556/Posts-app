import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
user:any
userName:string;
notUser:boolean=false;
isOpen: boolean=false;
userId:string;
  constructor(private auth:AuthService, private userService:UserService,) { }

  ngOnInit(): void {
  this.auth.user.subscribe(user=>{
    this.user=user
    if(user){
    //  this.userName=user.displayName;
    this.userName=user.displayName;
      // console.log(this.userName);
      // console.log(this.user);
      this.userService.adduser(user);
      this.auth.userId=user.uid;
      // console.log(this.auth.userId);
    }
    else{
      this.notUser=false;
    }
  })
    
  }

  loginWithGoogle(){
    this.auth.login();

  }

  logOut(){
    this.auth.logout();
  }

  toggleNavBar(){
    this.isOpen=!this.isOpen;
      }

}
