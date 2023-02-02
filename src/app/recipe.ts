/* schema:
 recipe {
    name: string,
    ingredients: string,
    instructions: string,
    image: string,
    tags: string,
    rating: number,
    notes: string,
    source: string,
    date: date,
    id: number
}
*/

// create template for recipes, enforcing these properties
export class Recipe {
  name: string;
  ingredients: string;
  instructions: string;
  image: string;
  tags: string;
  rating: number;
  notes: string;
  source: string;
  date: Date;
  id: number;
}
