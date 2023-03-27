import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { DataValidationService } from './data-validation.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {
  private _recipes = new BehaviorSubject<Recipe[]>([]);

  constructor(
    private apiService: ApiService,
    private dataValidationService: DataValidationService
  ) {
    this.loadRecipes();
  }

  get recipes() {
    return this._recipes.asObservable();
  }

  loadRecipes() {
    this.apiService.fetchRecipes().subscribe((data) => {
      const validatedRecipes = this.dataValidationService.validateRecipeData(data);
      this._recipes.next(validatedRecipes);
    });
  }
}
