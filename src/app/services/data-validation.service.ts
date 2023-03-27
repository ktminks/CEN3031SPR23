import { Injectable } from '@angular/core';
import { Ingredient, Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataValidationService {
  validateRecipeData(recipeData: any): Recipe[] {
    const validatedRecipes: Recipe[] = [];

    recipeData.forEach((recipe: any) => {
      const ingredients: Ingredient[] = recipe.ingredients.map((ingredient: string) => {
        const [name, amount, amountType] = ingredient.split(',');
        
        return { name, amount: parseFloat(amount), amountType };
      });

      validatedRecipes.push({
        ...recipe,
        ingredients,
        date: new Date(recipe.date).toISOString()
      });
    });

    return validatedRecipes;
  }
}
