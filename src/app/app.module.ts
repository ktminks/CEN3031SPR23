import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RecipeModule } from './recipes/recipe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    RecipeModule,
    AppRoutingModule, 
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
