import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Inject, Input } from '@angular/core';
import { RecipeDataService } from 'src/app/services/recipe-data.service';

@Component({
  selector: 'app-delete-recipe',
  templateUrl: './delete-recipe-dialog.component.html',
  styleUrls: ['../form.component.scss'],
})
export class DeleteRecipeDialog {
  message = '';
  delete = false;

  constructor(
    private dialogRef: MatDialogRef<DeleteRecipeDialog>,
    @Inject(MAT_DIALOG_DATA) data: { message: string; delete: boolean }
  ) {
    this.message = data ? data.message : '';
  }
}

@Component({
  selector: 'app-delete-recipe-button',
  templateUrl: './delete-recipe.component.html',
  styleUrls: ['../form.component.scss'],
})
export class DeleteRecipeComponent {
  @Input() id !: string;
  title = 'matDialog';
  dataFromDialog: any;
  delete!: boolean;
  constructor(public dialog: MatDialog, private recipeDataService: RecipeDataService) {}

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
      
      if (this.delete) {
        this.recipeDataService.deleteRecipe(this.id);
      }
      console.log(`The recipe was ${this.delete ? 'successfully' : 'not successfully'} deleted.`);
    });
  }
}
