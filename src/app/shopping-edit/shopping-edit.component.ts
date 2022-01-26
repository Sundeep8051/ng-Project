import { Component, ElementRef, OnInit,EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name', {static:false}) ingredientName: ElementRef;
  @ViewChild('amount', {static:false}) ingredientAmount:ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAdded(){
    const name = this.ingredientName.nativeElement.value;
    const amount = this.ingredientAmount.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.ingredientAdded.emit(ingredient);
  }

}
