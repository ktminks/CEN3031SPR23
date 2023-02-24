import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RecipeModule } from './recipes/recipe.module';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
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
    RecipeFormComponent, 
    RecipeFormComponentDialog, 
    IngredientFormComponent,
      NavComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule, 
    RecipeModule,
    AppRoutingModule, 
    MatToolbarModule,
    FormsModule, 
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MaterialExampleModule,
    BrowserAnimationsModule,],
  bootstrap: [AppComponent],
})
export class AppModule {}
