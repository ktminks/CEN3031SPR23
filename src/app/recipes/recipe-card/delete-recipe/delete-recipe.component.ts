import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-recipe',
  templateUrl: './delete-recipe-dialog.component.html',
  styleUrls: ['./delete-recipe.component.scss']
})
export class DeleteRecipeDialog {
  message = '';

  constructor(
    private dialogRef: MatDialogRef<DeleteRecipeDialog>,
    @Inject(MAT_DIALOG_DATA) data: { message: string }
  ) {
    this.message = data ? data.message : '';
  }
}



@Component({
  selector: 'app-delete-recipe-button',
  templateUrl: './delete-recipe.component.html',
  styleUrls: ['./delete-recipe.component.scss']
})
export class DeleteRecipeComponent {
  title = 'matDialog';
  dataFromDialog: any;

  constructor(public dialog: MatDialog) {}

  confirmDialog() {
    const ref: MatDialogRef<DeleteRecipeDialog> = this.dialog.open(
      DeleteRecipeDialog,
      {
        width: '600px',
        height: '210px',
        data: {
          message: 'Are you sure to cancel without saving the data?',
        },
        backdropClass: 'confirmDialogComponent',
        hasBackdrop: true,
      }
    );
  }
}

