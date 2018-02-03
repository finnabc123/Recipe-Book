import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router/';
import { Subscription } from 'rxjs/Subscription';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 're-recipe-details',
  templateUrl: './recipe-details.component.html',
 
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  // @Input() 
  selectedRecipe: Recipe;
  private recipeIndex: number;
  private subscription: Subscription;

  constructor(private sls: ShoppingListService, 
              private router: Router, 
              private route: ActivatedRoute,
              private recipesService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) =>{
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
      }
    );
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }
  onDelete(){
    this.recipesService.deleteRecipe(this.selectedRecipe)
    this.router.navigate(['/recipes']);
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
