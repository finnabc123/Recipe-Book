import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 're-shopping-list',
  templateUrl: './shopping-list.component.html',
 
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  constructor(private sls: ShoppingListService) {
    
   }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

}
