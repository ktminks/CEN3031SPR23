import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {
  @Input() recipe: Recipe = {
    name: '',
    ingredients: [],
    instructions: [],
    image: '',
    tags: '',
    rating: 0,
    notes: '',
    source: '',
    date: '',
    id: 0
  };
}



