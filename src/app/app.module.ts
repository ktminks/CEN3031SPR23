import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeModule } from './recipes/recipe.module';
import { DataModule } from './core/data.module';
import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { IngredientFormComponent } from './recipe-form/ingredient-form/ingredient-form.component';

@NgModule({
  declarations: [AppComponent, RecipeCardComponent, RecipeFormComponent, IngredientFormComponent],
  imports: [BrowserModule, RecipeModule, DataModule, CommonModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
