import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog
} from '@angular/material/dialog';
import { DialogData, Recipe } from '../../recipe.model';
import { RecipeDataService } from 'src/app/services/recipe-data.service';


// ----------------- Button -----------------

@Component({
  selector: 'app-add-recipe-button',
  templateUrl: 'add-recipe-button.component.html',
  styleUrls: ['../form.component.scss']
})

export class AddRecipeButtonComponent{
  newRecipe!: DialogData;

  constructor(public dialog: MatDialog, private recipeDataService: RecipeDataService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddRecipeDialog, {
      width: '50vw',
      minWidth: '400px',
      data: { ...this.newRecipe },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == undefined) return;

      this.recipeDataService.addRecipe(result);
      
      console.log(`Add Recipe Form closed:
        Added recipe with id # ${result.id}
          date: ${result.date}
          name: ${result.name}
          ingredients: ${result.ingredients}
          instructions: ${result.instructions}
          image: ${result.image}
          tags: ${result.tags}
          rating: ${result.rating}
          notes: ${result.notes}
          source: ${result.source}`  
        );
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