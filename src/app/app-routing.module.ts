import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';  // CLI imports router

import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeCardComponent,
      children: [
          // { path: '', component: RecipeCardComponent},
          // { path: ':id', component: RecipeDetailComponent},
          // { path: ':id/edit', component: RecipeEditComponent}
      ]
    },
    { path: '**', redirectTo: '/recipes', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule]
})
export class AppRoutingModule { }