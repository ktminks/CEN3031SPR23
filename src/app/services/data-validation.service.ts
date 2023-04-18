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
        let amount, amountType, name, delimiter;

        if (ingredient.includes(', ')) delimiter = ', ';
        else if (ingredient.includes(',')) delimiter = ',';
        else delimiter = ' ';
        
        if (typeof(ingredient.split(delimiter)[0]) == 'number' || parseInt(ingredient.split(delimiter)[0]))
          [amount, amountType, name] = ingredient.split(delimiter);
        else 
          [name, amount, amountType] = ingredient.split(delimiter);

        return { amount: parseFloat(amount.trim()), amountType, name };
      });
      console.table(ingredients);
      validatedRecipes.push({
        ...recipe,
        ingredients,
        date: new Date(recipe.date).toISOString()
      });
    });

    return validatedRecipes;
  }
}
