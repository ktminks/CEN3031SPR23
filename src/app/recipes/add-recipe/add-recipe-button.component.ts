import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog
} from '@angular/material/dialog';

// ----------------- Dialog -----------------

export interface DialogData {
  id: number;
  date: string;
  name: string;
  ingredients: string;
  instructions: string;
  image: string;
  tags: string;
  rating: number;
  notes: string;
  source: string;
}


// ----------------- Button -----------------

@Component({
  selector: 'app-add-recipe-button',
  templateUrl: 'add-recipe-button.component.html',
  styleUrls: ['add-recipe-button.component.scss']
})

export class AddRecipeButtonComponent{
  id!: number;
  date!: string;
  name!: string;
  ingredients!: string;
  instructions!: string;
  image!: string;
  tags!: string;
  rating!: number;
  notes!: string;
  source!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddRecipeDialog, {
      data: {
        id: this.id,
        date: this.date,
        name: this.name,
        ingredients: this.ingredients,
        instructions: this.instructions,
        image: this.image,
        tags: this.tags,
        rating: this.rating,
        notes: this.notes,
        source: this.source,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Add Recipe Form closed -- result: ${result}`);
    });
  }
}

// ----------------- [Populate] Form -----------------
@Component({
  selector: 'add-recipe-form',
  templateUrl: 'add-recipe-form.component.html',
})

export class AddRecipeDialog {
  constructor(
    public dialogRef: MatDialogRef<AddRecipeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}