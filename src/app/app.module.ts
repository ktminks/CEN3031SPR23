import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';

import { AppRoutingModule } from './app-routing.module';
import { RecipeModule } from './recipes/recipe.module';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { PantryComponent } from './pantry/pantry.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    PantryComponent,
    ShoppingListComponent, 
  ],
  imports: [
    BrowserModule, 
    RecipeModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    NavComponent,
    BannerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
