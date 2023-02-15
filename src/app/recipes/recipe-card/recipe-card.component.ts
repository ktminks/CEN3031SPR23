import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {
  recipes: Recipe[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // serve recipes from assets [for testing]
    this.http.get<Recipe[]>('assets/recipes.json').subscribe((recipes) => {
      this.recipes = recipes;
    });

    // to serve from api, use path '/api/recipes'
  }
}
