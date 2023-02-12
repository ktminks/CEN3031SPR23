import { Component } from '@angular/core';
import { Ingredient} from '../../recipes/recipe.model';
@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent {
  

  model = new Ingredient('',3, '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newIngredient() {
    this.model = new Ingredient('',2,'');
  }
}
