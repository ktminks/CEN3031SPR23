import { Component } from '@angular/core';
import { Ingredient} from '../../recipe.model';
@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent {
  name!: string;
  amount!: number;
  amountType!: string;
  ingredient!: Ingredient;
  submitted = false;

  onSubmit() { this.submitted = true; }

  newIngredient() {
    this.ingredient = new Ingredient(this.name, this.amount, this.amountType);
  }
}
