import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 're-recipe-list',
  templateUrl: './recipe-list.component.html',
  
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // new Recipe("Cheese and Mushroom Toast", "Delicious", "https://i.pinimg.com/originals/2b/95/af/2b95afe1d62d7c0cd7b58dfe45d1e549.jpg", []),
    // new Recipe("Asparagus and Cheese Soup", "Very tasty", "https://www.ottolenghi.co.uk/media/catalog/product/cache/1/image/1300x/9df78eab33525d08d6e5fb8d27136e95/r/e/resps0010001_b.jpg", [])
    
  ];
  @Output() recipeSelected = new EventEmitter();
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe)
  }

}
