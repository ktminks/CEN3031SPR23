import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';  // CLI imports router

import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent,
      children: [
          { path: '', component: RecipesComponent},
          // { path: ':id', component: RecipeDetailComponent},
          // { path: ':id/edit', component: RecipeEditComponent}
          // { path: 'new', component: AddRecipeComponent}
      ]
    },
    { path: '**', redirectTo: '/recipes', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }