import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RecipeModule } from './recipes/recipe.module';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule, 
    RecipeModule,
    AppRoutingModule, 
    MatToolbarModule
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
