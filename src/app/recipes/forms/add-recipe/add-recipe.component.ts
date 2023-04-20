import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog
} from '@angular/material/dialog';
import { Recipe } from '../../recipe.model';


// ----------------- Button -----------------

@Component({
  selector: 'app-add-recipe-button',
  templateUrl: 'add-recipe-button.component.html',
  styleUrls: ['../form.component.scss']
})

export class AddRecipeButtonComponent{
  newRecipe!: Recipe;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddRecipeDialog, {
      width: '50vw',
      minWidth: '400px',
      data: { ...this.newRecipe },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Add Recipe Form closed:
        ${(result == undefined) 
          ? "Nothing submitted" 
          : `Added recipe with id # ${result.id}
          date: ${result.date}
          name: ${result.name}
          ingredients: ${result.ingredients}
          instructions: ${result.instructions}
          image: ${result.image}
          tags: ${result.tags}
          rating: ${result.rating}
          notes: ${result.notes}
          source: ${result.source}`  
        }`);
    });
  }
}

// ----------------- [Populate] Form -----------------
@Component({
  selector: 'add-recipe-form',
  templateUrl: 'add-recipe-form.component.html',
  styleUrls: ['../form.component.scss']
})

export class AddRecipeDialog {
  constructor(
    public dialogRef: MatDialogRef<AddRecipeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Recipe
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}