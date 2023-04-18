import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Inject, OnInit } from '@angular/core';
import { result } from 'cypress/types/lodash';

@Component({
  selector: 'app-delete-recipe',
  templateUrl: './delete-recipe-dialog.component.html',
  styleUrls: ['./delete-recipe.component.scss']
})
export class DeleteRecipeDialog {
  message = '';
  delete = false;

  constructor(
    private dialogRef: MatDialogRef<DeleteRecipeDialog>,
    @Inject(MAT_DIALOG_DATA) data: { message: string, delete: boolean }
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
  delete!: boolean;
  constructor(public dialog: MatDialog) {}

  confirmDialog() {
    const ref: MatDialogRef<DeleteRecipeDialog> = this.dialog.open(
      DeleteRecipeDialog,
      {
        width: '600px',
        height: '210px',
        data: {
          message: 'Are you sure to cancel without saving the data?',
          delete: this.delete,
        },
        backdropClass: 'confirmDialogComponent',
        hasBackdrop: true,
      }
    );
    ref.afterClosed().subscribe((result) => {
    this.delete = result;
    console.log('The dialog was closed');
    console.log(result);
    });
  }
}

