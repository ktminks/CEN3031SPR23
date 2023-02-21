import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { RecipesComponent } from './recipes.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

@NgModule({
  declarations: [RecipeCardComponent, RecipesComponent, AddRecipeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule, 
    MatButtonModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MatCardModule, 
    MatButtonModule,
    MatChipsModule,
    MatIconModule
  ],
})
export class RecipeModule {}
