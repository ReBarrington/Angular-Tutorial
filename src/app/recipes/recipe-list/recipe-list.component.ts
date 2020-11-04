import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // has an array which includes Recipe objects, as defined in our model.
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test.', 'https://www.forksoverknives.com/wp-content/uploads/fly-images/66822/Tex-Mex-Pita-Pizzas_WP-688x387-c.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
