import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { routing, appRoutingProviders } from './app.routes';
import { Routes, RouterModule } from '@angular/router';
import { RecipeStartComponent } from './recipes/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
  
  ],
  imports: [
    BrowserModule,
     routing
  ],
  exports: [
    HeaderComponent
],
  providers: [RecipeService, 
    ShoppingListService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {
  
 }

