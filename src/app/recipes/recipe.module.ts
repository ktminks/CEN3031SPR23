import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';

import { RecipesComponent } from './recipes.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { AddRecipeButtonComponent,
         AddRecipeDialog } from './forms/add-recipe/add-recipe.component';
import { EditRecipeButtonComponent,
         EditRecipeDialog } from './forms/edit-recipe/edit-recipe.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { DeleteRecipeComponent,DeleteRecipeDialog } from './forms/delete-recipe/delete-recipe.component';
import { LikeRecipeComponent } from './forms/like-recipe/like-recipe.component';
import { ShareRecipeComponent } from './forms/share-recipe/share-recipe.component';



@NgModule({
  declarations: [
    RecipesComponent, 
    RecipeCardComponent, 
    AddRecipeButtonComponent,
    AddRecipeDialog,
    EditRecipeButtonComponent,
    EditRecipeDialog,
    DeleteRecipeComponent,
    DeleteRecipeDialog,
    LikeRecipeComponent,
    ShareRecipeComponent
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
  providers: [
    ApiService,
  ],
})
export class RecipeModule {}
