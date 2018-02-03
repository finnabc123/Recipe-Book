import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Cheese and Mushroom Toast", "Delicious", "https://i.pinimg.com/originals/2b/95/af/2b95afe1d62d7c0cd7b58dfe45d1e549.jpg", [
      new Ingredient("slices white bread", 2),
      new Ingredient( "mushrooms", 4),
      new Ingredient("cheese", 4)
    ]),
      
    new Recipe("Asparagus and Cheese Soup", "Very tasty", "https://www.ottolenghi.co.uk/media/catalog/product/cache/1/image/1300x/9df78eab33525d08d6e5fb8d27136e95/r/e/resps0010001_b.jpg", [])
    
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    this.recipes[id]
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
