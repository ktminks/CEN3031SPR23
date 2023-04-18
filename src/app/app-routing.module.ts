import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  // CLI imports router
import { RecipesComponent } from './recipes/recipes.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { PantryComponent } from './pantry/pantry.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { 
    path: 'login-signup',
    component: LoginSignupComponent 
  },
  { 
    path: 'pantry', 
    component: PantryComponent
  },
  { 
    path: 'shopping-list', 
    component: ShoppingListComponent
  },
  
  { 
    path: '', 
    component: RecipesComponent
  },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }