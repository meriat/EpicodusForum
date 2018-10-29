import { Injectable } from '@angular/core';
import { Post } from './models/post-model';
import { POSTS } from './mock-post';

@Injectable()
export class PostService {

  postsToDisplay: Post[] = [];
  
  getPosts(categoryId: number){
    for(var i = 0; i <= POSTS.length-1; i++){
      if(POSTS[i].categoryId === categoryId) {
        this.postsToDisplay.push(POSTS[i]);
      }
    }
    return this.postsToDisplay;

  }
  
  // getPostById(categoryId: number){
  //   for(var i = 0; i <= POSTS.length-1; i++){
  //     if(POSTS[i].categoryId === categoryId) {
  //       this.postsToDisplay.push(POSTS[i]);
  //     }
  //   }
  //   return this.postsToDisplay;
  // }
}
