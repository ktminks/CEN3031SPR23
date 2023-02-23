/* schema:
 recipe {
    name: string,
    ingredients: [{
        name: string,
        amount: number,
        amountType: string
    }],
    instructions: [string],
    image: string,
    tags: string,
    rating: number,
    notes: string,
    source: string,
    date: date,
    id: number
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

export class Recipe{
  constructor(
    public name: string,
    public ingredients: Ingredient[],
    public instructions: string[],
    public image: string,
    public tags: string,
    public rating: number,
    public notes: string,
    public source: string,
    public date: string,
    public id: number
  ){}
}
export class Ingredient{
  constructor(
    public name: string,
    public amount: number,
    public amountType: string
  ){}
}