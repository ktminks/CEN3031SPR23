export interface Ingredient {
  name: string;
  amount: number;
  amountType: string;
}

// create template for recipes, enforcing these properties
export interface Recipe {
  name: string;
  ingredients: Ingredient[];
  instructions: [string];
  image: string;
  tags: string;
  rating: number;
  notes: string;
  source: string;
  date: Date;
  id: number;
}

// This isn't being used yet -- needs code to enforce it
