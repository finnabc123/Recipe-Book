import { NgModule }             from '@angular/core';

import { RecipesComponent } from "./recipes/recipes.component";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router'
import { app_Recipe_Routes } from "./recipes/recipes.routes"

export const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes',      component: RecipesComponent, children: app_Recipe_Routes },
    { path: 'shopping-list', component: ShoppingListComponent }
  
];
  

  export const appRoutingProviders: any[] = [

  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);