import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RecipesComponent } from './recipes.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { AddRecipeButtonComponent,
         AddRecipeDialog 
        } from './add-recipe/add-recipe-button.component';
import {  } from './add-recipe/add-recipe-button.component';
import { IngredientFormComponent } from './add-recipe/ingredient-form/ingredient-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';



@NgModule({
  declarations: [
    RecipesComponent, 
    RecipeCardComponent, 
    AddRecipeButtonComponent,
    AddRecipeDialog,
    IngredientFormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class RecipeModule {}
