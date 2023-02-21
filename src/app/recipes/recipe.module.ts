import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@NgModule({
  declarations: [RecipeCardComponent],
  imports: [MatCardModule, MatButtonModule, MatChipsModule, CommonModule, HttpClientModule],
  exports: [MatCardModule, MatButtonModule, MatChipsModule, CommonModule, HttpClientModule],
})
export class RecipeModule {}
