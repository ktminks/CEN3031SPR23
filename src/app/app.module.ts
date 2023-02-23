import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';

import { AppComponent } from './app.component';
import { RecipeModule } from './recipes/recipe.module';
import { DataModule } from './core/data.module';
import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';
import { RecipeFormComponent, RecipeFormComponentDialog } from './recipe-form/recipe-form.component';
import { IngredientFormComponent } from './recipe-form/ingredient-form/ingredient-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent, 
    RecipeCardComponent, 
    RecipeFormComponent, 
    RecipeFormComponentDialog, 
    IngredientFormComponent],
  imports: [BrowserModule, RecipeModule, DataModule, CommonModule,
    FormsModule, 
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MaterialExampleModule,
    BrowserAnimationsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
