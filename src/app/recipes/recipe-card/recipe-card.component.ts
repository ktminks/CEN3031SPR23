import { Component, Input, EventEmitter, OnInit, Output  } from '@angular/core';
import { Recipe } from '../recipe.model';
import { MatDialog } from '@angular/material/dialog';
import { LikeRecipeComponent } from '../forms/like-recipe/like-recipe.component';
import { ShareRecipeComponent } from '../forms/share-recipe/share-recipe.component';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() recipeEdited = new EventEmitter<Recipe>();

  ngOnInit(): void {}

  constructor(private _matDialogLike: MatDialog,private _matDialogShare: MatDialog) {}

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
  onClickEdit(){
    this.recipe && this.recipeEdited.emit(this.recipe);
  }
}



