import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './recipe.model';
import {RecipeDataService} from '../services/recipe-data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  private recipeSubscription: Subscription = new Subscription;

  constructor(private recipeDataService: RecipeDataService) {}

  ngOnInit(): void {
    this.recipeSubscription = this.recipeDataService.recipes.subscribe((data: Recipe[]) => {
      this.recipes = data;
    });
  }

  ngOnDestroy(): void {
    this.recipeSubscription.unsubscribe();
  }
}
