import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../models/category-model';
import {CategoryService} from '../category.service';
import {PostService} from '../post.service';
import {Post} from '../models/post-model';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  providers: [CategoryService,PostService]
})
export class CategoryDetailComponent implements OnInit {
  posts: Post[] = [];
  categoryId: number;
  categoryToDisplay: Category;
  postsToDisplay: Post[];

  constructor(private route: ActivatedRoute,
     private location: Location, 
     private categoryService: CategoryService,
     private postService: PostService
     ) {}
  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.categoryId = parseInt(urlParameters['id']);
    });
    this.categoryToDisplay = this.categoryService.getCategoryById(this.categoryId);
    this.posts = this.postService.getPosts(this.categoryId);
    console.log(this.posts);
    // this.postsToDisplay = this.postService.getPostById(this.categoryId);
  }

  
  
}
