import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditRecipeDialog } from '../../forms/edit/edit-recipe.component';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(EditRecipeDialog);
  }
}
