import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Pongal", "A South Indian Dish", "../assets/pongal.jpg"),
    new Recipe("Bisi Bele Bath", "A South Indian Dish", "../assets/bisi_bele_bath.jpg")
  ];
  @Output() onRecipeListEvent = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeItemFired(recipe:Recipe){
    this.onRecipeListEvent.emit(recipe);
  }
}
