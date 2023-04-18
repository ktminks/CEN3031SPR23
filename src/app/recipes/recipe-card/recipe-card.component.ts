import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { MatDialog } from '@angular/material/dialog';
import { LikeRecipeComponent } from './like-recipe/like-recipe.component';
import { ShareRecipeComponent } from './share-recipe/share-recipe.component';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {
  @Input() recipe: Recipe = {
    name: '',
    ingredients: [],
    instructions: [],
    image: '',
    tags: '',
    rating: 0,
    notes: '',
    source: '',
    date: '',
    id: 0
  };
  constructor(private _matDialogLike: MatDialog,private _matDialogShare: MatDialog) {}
  //constructor(private _matDialogShare: MatDialog) {}
  onClickLike() {
    this._matDialogLike.open(LikeRecipeComponent,{
      height: '100px',
      width: '200px',
    });
  }
  onClickShare() {
    this._matDialogShare.open(ShareRecipeComponent,{
      height: '100px',
      width: '200px',
    });
  }
}



