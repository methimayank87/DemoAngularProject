import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent implements OnInit {
likeCount : number = 100;
dislikeCount : number = 25;
isLiked : boolean = false;
isDisliked : boolean = false;

updateCount(type : string){
  if(type=='like'){
    this.checkIfDisliked();
    this.handleLike();
  }
  else{
    this.checkIfLiked();
    this.handleDislike();
  }
}

handleLike(){
  if(this.isLiked){
    this.isLiked = false;
    this.likeCount -- ;
  }
  else{
    this.isLiked = true;
    this.likeCount++;
  }
}
handleDislike(){
  if(this.isDisliked){
    this.isDisliked = false;
    this.dislikeCount --;
  }
  else{
    this.isDisliked = true;
    this.dislikeCount++;
  }
}
checkIfLiked(){
  if(this.isLiked){
    this.isLiked = false;
    this.likeCount--;
  }
}
checkIfDisliked(){
  if(this.isDisliked){
    this.isDisliked = false;
    this.dislikeCount --;
  }
}
  constructor() { }


  ngOnInit(): void {
  }

}
