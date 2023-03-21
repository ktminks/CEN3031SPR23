/* schema (db):
 recipe {
    name: string,
    ingredients: [string],
    instructions: [string],
    image: string,
    tags: string,
    rating: number,
    notes: string,
    source: string,
    date: date,
    id: number
}

{
    name: string,
    amount: number,
    amountType: string
}
*/
export interface Ingredient {
  name: string;
  amount: number;
  amountType: string;
}

// create template for recipes, enforcing these properties
export interface Recipe {
  name: string;
  ingredients: Ingredient[];
  instructions: string[];
  image: string;
  tags: string;
  rating: number;
  notes: string;
  source: string;
  date: string;
  id: number;  
}
