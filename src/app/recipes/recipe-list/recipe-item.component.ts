import { Routes, RouterModule } from "@angular/router";
import { Component, Input } from '@angular/core';
import{ Recipe } from '../recipe';


@Component({
  selector: 're-recipe-item',
  templateUrl: './recipe-item.component.html',
 
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() recipeId: number ;

}
