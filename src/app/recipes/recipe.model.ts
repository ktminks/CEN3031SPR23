
export interface Ingredient {
  name: string;
  amount: number;
  amountType: string;
}

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
  id: string;  
}

export interface DialogData {
  id: string;
  date: string;
  name: string;
  ingredients: string;
  instructions: string;
  image: string;
  tags: string;
  rating: number;
  notes: string;
  source: string;
}