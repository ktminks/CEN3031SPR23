import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { AppRoutingModule } from './app-routing.module';
import { RecipeModule } from './recipes/recipe.module';

@NgModule({
  declarations: [
    AppComponent, 
    NavComponent,
  ],
  imports: [
    BrowserModule, 
    RecipeModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
