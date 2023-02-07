import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeModule } from './recipes/recipe.module';
import { DataModule } from './core/data.module';
import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';

@NgModule({
  declarations: [AppComponent, RecipeCardComponent],
  imports: [BrowserModule, RecipeModule, DataModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
