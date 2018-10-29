import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../models/category-model';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) {}
  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.categoryId = parseInt(urlParameters['id']);
    })
  }

  categoryId: number = null;

}
