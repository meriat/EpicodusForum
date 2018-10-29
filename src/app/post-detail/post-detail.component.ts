import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Post } from '../models/post-model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [ PostService]
})
export class PostDetailComponent implements OnInit {
  postId: number;
  postToDisplay: Post;

  constructor(private router: Router,
     private postService: PostService,
     private location: Location,
     private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = parseInt(urlParameters['id']);
    });
this.postToDisplay = this.postService.getPostById(this.postId)
}
}
