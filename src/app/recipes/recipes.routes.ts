import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { RecipeStartComponent } from "./recipe-start.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";

export const app_Recipe_Routes: Routes = [
    
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailsComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  
];
  

  export const appRoutingProviders: any[] = [

  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(app_Recipe_Routes);