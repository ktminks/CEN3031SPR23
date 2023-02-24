import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';


Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})



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

@Component({
  selector: 'recipe-form-component',
  templateUrl: 'recipe-form.component.html',
})

export class RecipeFormComponent {
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
    const dialogRef = this.dialog.open(RecipeFormComponentDialog, {
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
      console.log('The dialog was closed');
      console.log(`Dialog result: ${result.notes}`);
    });
  }
}


@Component({
  selector: 'recipe-form-dialog',
  templateUrl: 'recipe-form-dialog.component.html',
})
export class RecipeFormComponentDialog {
  constructor(
    public dialogRef: MatDialogRef<RecipeFormComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
