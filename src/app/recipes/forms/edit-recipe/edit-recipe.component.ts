import { Component,Input } from '@angular/core';
import { Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog
} from '@angular/material/dialog';
import { DialogData, Recipe } from '../../recipe.model';


// ----------------- Button -----------------

@Component({
  selector: 'app-edit-recipe-button',
  templateUrl: 'edit-recipe-button.component.html',
  styleUrls: ['../form.component.scss']
})

export class EditRecipeButtonComponent{
  @Input() recipe!: Recipe;
  currentRecipe!: DialogData;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditRecipeDialog, {
      width: '50vw',
      minWidth: '400px',
      data: {        
        ...this.currentRecipe = {
          ...this.recipe,
          ingredients: this.recipe.ingredients.map((i) => `${i.amount} ${i.amountType} ${i.name}`).join('\n'),
          instructions: this.recipe.instructions.join('\n'),
        },
      }
      
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Edit Recipe Form closed:
        ${(result == undefined) 
          ? "Nothing submitted" 
          : `Edited recipe with id # ${result.id}
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
  selector: 'edit-recipe-form',
  templateUrl: 'edit-recipe-form.component.html',
  styleUrls: ['../form.component.scss']
})

export class EditRecipeDialog {
  @Input() recipe!: Recipe;
  constructor(
    public dialogRef: MatDialogRef<EditRecipeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}