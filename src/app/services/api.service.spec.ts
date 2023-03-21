import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  const testData = [
    {
      "name": "Spaghetti Bolognese",
      "ingredients": [
        "spaghetti, 400, grams",
        "ground beef, 500, grams",
        "tomato sauce, 400, grams",
        "garlic, 3, cloves",
        "onion, 1, medium",
        "olive oil, 2, tablespoons"
      ],
      "instructions": [
        "Cook spaghetti according to package instructions.",
        "Meanwhile, heat olive oil in a large pan over medium heat.",
        "Add chopped garlic and onion, and cook until softened.",
        "Add ground beef and cook until browned.",
        "Stir in tomato sauce, reduce heat to low, and simmer for 10 minutes.",
        "Drain spaghetti and serve with the bolognese sauce on top."
      ],
      "image": "",
      "tags": "Pasta, Main Course, Italian",
      "rating": 4.5,
      "notes": "Add some red wine for a more authentic flavor.",
      "source": "Grandma's Kitchen",
      "date": "2022-12-01",
      "id": 1
    },
    {
      "name": "Spaghetti Carbonara",
      "ingredients": [
        "Spaghetti, 1, pound",
        "Bacon, 8, oz",
        "Eggs, 4, large",
        "Parmesan cheese, 1, cup",
        "Garlic, 2, cloves"
      ],
      "instructions": [
        "Cook spaghetti according to package instructions.",
        "In a large pan, cook bacon until crispy.",
        "In a bowl, beat eggs and parmesan cheese together.",
        "Once the spaghetti is done, reserve 1 cup of pasta water.",
        "Drain spaghetti and add it to the pan with bacon.",
        "Add the egg and cheese mixture to the pan and mix well.",
        "If the sauce is too thick, add some of the reserved pasta water.",
        "Serve hot, garnished with additional parmesan cheese."
      ],
      "image": "",
      "tags": "pasta, Italian, dinner",
      "rating": 4.8,
      "notes": "This dish is best served immediately after making it.",
      "source": "Grandma's Cookbook",
      "date": "2022-10-01",
      "id": 2
    },
    {
      "name": "Chicken Tikka Masala",
      "ingredients": [
        "Chicken breast, 2, lb",
        "Yogurt, 1, cup",
        "Garam masala, 2, tablespoon",
        "Cumin powder, 1, teaspoon",
        "Coriander powder, 1, teaspoon",
        "Chili powder, 1, teaspoon",
        "Tomato puree, 1, can",
        "Cream, 1, cup"
      ],
      "instructions": [
        "Cut chicken breast into 1-inch cubes.",
        "In a large bowl, mix yogurt, garam masala, cumin powder, coriander powder, and chili powder.",
        "Add chicken cubes to the bowl and mix well to coat.",
        "Cover and refrigerate for at least 2 hours.",
        "Preheat grill to high heat.",
        "Grill chicken until cooked through, about 10 minutes.",
        "In a large pan, heat tomato puree over medium heat.",
        "Add the grilled chicken to the pan.",
        "Add cream to the pan and mix well.",
        "Serve hot with rice or naan bread."
      ],
      "image": "",
      "tags": "Indian, chicken, dinner",
      "rating": 4.5,
      "notes": "This dish is best served immediately after making it.",
      "source": "Grandma's Cookbook",
      "date": "2022-10-01",
      "id": 3
    },
    {
      "name": "Chocolate Chip Cookies",
      "ingredients": [
        "Butter, 1, cup",
        "Brown sugar, 0.5, cup",
        "Granulated sugar, 0.5, cup",
        "Egg, 1, ",
        "Vanilla extract, 1, teaspoon",
        "Flour, 2, cup",
        "Baking soda, 1, teaspoon",
        "Salt, 0.5, teaspoon",
        "Chocolate chips, 2, cup"
      ],
      "instructions": [
        "Preheat oven to 350 degrees F.",
        "In a large bowl, cream together butter, brown sugar, and granulated sugar.",
        "Add egg and vanilla extract and mix well.",
        "In a separate bowl, mix together flour, baking soda, and salt.",
        "Add the dry ingredients to the wet ingredients and mix well.",
        "Add chocolate chips and mix well.",
        "Drop by rounded spoonfuls onto a baking sheet.",
        "Bake for 10-12 minutes."
      ],
      "image": "",
      "tags": "dessert, cookies, chocolate",
      "rating": 4.9,
      "notes": "This dish is best served immediately after making it.",
      "source": "Grandma's Cookbook",
      "date": "2022-10-01",
      "id": 4
    },
    {
      "name": "Grilled Cheese Sandwich",
      "ingredients": [
        "bread, 2, slices",
        "cheese, 2, slices",
        "butter, 1, tablespoon"
      ],
      "instructions": [
        "Butter one side of each slice of bread.",
        "Place one slice of bread, butter side down, on a frying pan over medium heat.",
        "Top with cheese.",
        "Place the second slice of bread, butter side up, on top of the cheese.",
        "Cook until bread is golden brown and cheese is melted, about 2 minutes per side."
      ],
      "image": "",
      "tags": "sandwich, grilled cheese, lunch",
      "rating": 4.0,
      "notes": "",
      "source": "Classic cookbook",
      "date": "2022-09-01",
      "id": 5
    },
    {
      "name": "Pancakes",
      "ingredients": [
        "flour, 1.5, cups",
        "sugar, 2, teaspoons",
        "baking powder, 1, teaspoon",
        "salt, 0.25, teaspoon",
        "milk, 1, cup",
        "eggs, 2, ",
        "melted butter, 2, tablespoons",
        "vanilla extract, 1, teaspoon"
      ],
      "instructions": [
        "In a large bowl, mix together flour, sugar, baking powder, and salt.",
        "In a separate bowl, mix together milk, eggs, melted butter, and vanilla extract.",
        "Add the wet ingredients to the dry ingredients and mix until just combined.",
        "Heat a frying pan over medium heat.",
        "Add a small amount of butter to the pan.",
        "Pour batter onto the pan to form 3-inch pancakes.",
        "Cook until bubbles form on the surface of the pancakes and the edges are dry, about 2 minutes per side."
      ],
      "image": "",
      "tags": "breakfast, pancakes, syrup",
      "rating": 4.5,
      "notes": "",
      "source": "Grandpa's kitchen",
      "date": "2022-06-01",
      "id": 6
    },
    {
      "name": "Lemon Chicken",
      "ingredients": [
        "lemon juice, 0.25, cup",
        "lemon zest, 1, tablespoon",
        "garlic, 1, teaspoon",
        "olive oil, 2, tablespoons",
        "salt, 0.5, teaspoon",
        "pepper, 0.25, teaspoon",
        "chicken, 2, breasts"
      ],
      "instructions": [
        "In a large bowl, whisk together lemon juice, lemon zest, garlic, olive oil, salt, and pepper.",
        "Add chicken breasts and marinate for at least 30 minutes.",
        "Preheat oven to 400 degrees F.",
        "Place chicken breasts on a baking sheet and bake for 20-25 minutes, or until chicken is cooked through."
      ],
      "image": "",
      "tags": "chicken, lemon, main course",
      "rating": 4.0,
      "notes": "",
      "source": "Friend's recipe",
      "date": "2022-05-15",
      "id": 7
    }
  ];  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch recipes from the API', () => {

    service.fetchRecipes().subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
  });
});
