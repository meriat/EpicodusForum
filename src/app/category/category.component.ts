import { Component,OnInit } from '@angular/core';
import { Category } from '../models/category-model';
import { Router } from '@angular/router';
import {CategoryService} from '../category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private router: Router, private categoryService: CategoryService) { }
  categories: Category[];
  ngOnInit(){
    this.categories = this.categoryService.getCategories();
  }
  goToDetailsPage(clickedCategory: Category) {
    this.router.navigate(['categories', clickedCategory.id]);
  };
  
}
