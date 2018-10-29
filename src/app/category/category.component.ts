import { Component } from '@angular/core';
import { Category } from '../models/category-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  constructor(private router: Router){}

categories: Category[] = [
  new Category('Epicodus Announcements',0),
  new Category('New Students',1),
  new Category('Social Activities',2),
  new Category('Alumni',3),
  new Category('Jobs',4),
  new Category('General Chatter',5)
];

goToDetailsPage(clickedCategory: Category){
  this.router.navigate(['categories', clickedCategory.id]);
}

}
