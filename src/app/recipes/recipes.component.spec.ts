import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RecipesComponent } from './recipes.component';
import { Recipe } from './recipe.model';
import { RecipeModule } from './recipe.module';

describe('RecipesComponent', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;
  let httpTestingController: HttpTestingController;
  const mockData: Recipe[] = [
    {
      name: 'Spaghetti Bolognese',
      ingredients: [
        {
          name: 'spaghetti',
          amount: 400,
          amountType: 'grams',
        },
        {
          name: 'ground beef',
          amount: 500,
          amountType: 'grams',
        },
        {
          name: 'tomato sauce',
          amount: 400,
          amountType: 'grams',
        },
        {
          name: 'garlic',
          amount: 3,
          amountType: 'cloves',
        },
        {
          name: 'onion',
          amount: 1,
          amountType: 'medium',
        },
        {
          name: 'olive oil',
          amount: 2,
          amountType: 'tablespoons',
        },
      ],
      instructions: [
        'Cook spaghetti according to package instructions.',
        'Meanwhile, heat olive oil in a large pan over medium heat.',
        'Add chopped garlic and onion, and cook until softened.',
        'Add ground beef and cook until browned.',
        'Stir in tomato sauce, reduce heat to low, and simmer for 10 minutes.',
        'Drain spaghetti and serve with the bolognese sauce on top.',
      ],
      image: '',
      tags: 'Pasta, Main Course, Italian',
      rating: 4.5,
      notes: 'Add some red wine for a more authentic flavor.',
      source: "Grandma's Kitchen",
      date: '2022-12-01',
      id: 1,
    },
    {
      name: 'Spaghetti Carbonara',
      ingredients: [
        { name: 'Spaghetti', amount: 1, amountType: 'pound' },
        { name: 'Bacon', amount: 8, amountType: 'oz' },
        { name: 'Eggs', amount: 4, amountType: 'large' },
        { name: 'Parmesan cheese', amount: 1, amountType: 'cup' },
        { name: 'Garlic', amount: 2, amountType: 'cloves' },
      ],
      instructions: [
        'Cook spaghetti according to package instructions.',
        'In a large pan, cook bacon until crispy.',
        'In a bowl, beat eggs and parmesan cheese together.',
        'Once the spaghetti is done, reserve 1 cup of pasta water.',
        'Drain spaghetti and add it to the pan with bacon.',
        'Add the egg and cheese mixture to the pan and mix well.',
        'If the sauce is too thick, add some of the reserved pasta water.',
        'Serve hot, garnished with additional parmesan cheese.',
      ],
      image: '',
      tags: 'pasta, Italian, dinner',
      rating: 4.8,
      notes: 'This dish is best served immediately after making it.',
      source: "Grandma's Cookbook",
      date: '2022-10-01',
      id: 2,
    },
    {
      name: 'Chicken Tikka Masala',
      ingredients: [
        { name: 'Chicken breast', amount: 2, amountType: 'lb' },
        { name: 'Yogurt', amount: 1, amountType: 'cup' },
        { name: 'Garam masala', amount: 2, amountType: 'tablespoon' },
        { name: 'Cumin powder', amount: 1, amountType: 'teaspoon' },
        { name: 'Coriander powder', amount: 1, amountType: 'teaspoon' },
        { name: 'Chili powder', amount: 1, amountType: 'teaspoon' },
        { name: 'Tomato puree', amount: 1, amountType: 'can' },
        { name: 'Cream', amount: 1, amountType: 'cup' },
      ],
      instructions: [
        'Cut chicken breast into 1-inch cubes.',
        'In a large bowl, mix yogurt, garam masala, cumin powder, coriander powder, and chili powder.',
        'Add chicken cubes to the bowl and mix well to coat.',
        'Cover and refrigerate for at least 2 hours.',
        'Preheat grill to high heat.',
        'Grill chicken until cooked through, about 10 minutes.',
        'In a large pan, heat tomato puree over medium heat.',
        'Add the grilled chicken to the pan.',
        'Add cream to the pan and mix well.',
        'Serve hot with rice or naan bread.',
      ],
      image: '',
      tags: 'Indian, chicken, dinner',
      rating: 4.5,
      notes: 'This dish is best served immediately after making it.',
      source: "Grandma's Cookbook",
      date: '2022-10-01',
      id: 3,
    },
    {
      name: 'Chocolate Chip Cookies',
      ingredients: [
        { name: 'Butter', amount: 1, amountType: 'cup' },
        { name: 'Brown sugar', amount: 0.5, amountType: 'cup' },
        { name: 'Granulated sugar', amount: 0.5, amountType: 'cup' },
        { name: 'Egg', amount: 1, amountType: '' },
        { name: 'Vanilla extract', amount: 1, amountType: 'teaspoon' },
        { name: 'Flour', amount: 2, amountType: 'cup' },
        { name: 'Baking soda', amount: 1, amountType: 'teaspoon' },
        { name: 'Salt', amount: 0.5, amountType: 'teaspoon' },
        { name: 'Chocolate chips', amount: 2, amountType: 'cup' },
      ],
      instructions: [
        'Preheat oven to 350 degrees F.',
        'In a large bowl, cream together butter, brown sugar, and granulated sugar.',
        'Add egg and vanilla extract and mix well.',
        'In a separate bowl, mix together flour, baking soda, and salt.',
        'Add the dry ingredients to the wet ingredients and mix well.',
        'Add chocolate chips and mix well.',
        'Drop by rounded spoonfuls onto a baking sheet.',
        'Bake for 10-12 minutes.',
      ],
      image: '',
      tags: 'dessert, cookies, chocolate',
      rating: 4.9,
      notes: 'This dish is best served immediately after making it.',
      source: "Grandma's Cookbook",
      date: '2022-10-01',
      id: 4,
    },
    {
      name: 'Grilled Cheese Sandwich',
      ingredients: [
        {
          name: 'bread',
          amount: 2,
          amountType: 'slices',
        },
        {
          name: 'cheese',
          amount: 2,
          amountType: 'slices',
        },
        {
          name: 'butter',
          amount: 1,
          amountType: 'tablespoon',
        },
      ],
      instructions: [
        'Butter one side of each slice of bread.',
        'Place one slice of bread, butter side down, on a frying pan over medium heat.',
        'Top with cheese.',
        'Place the second slice of bread, butter side up, on top of the cheese.',
        'Cook until bread is golden brown and cheese is melted, about 2 minutes per side.',
      ],
      image: '',
      tags: 'sandwich, grilled cheese, lunch',
      rating: 4.0,
      notes: '',
      source: 'Classic cookbook',
      date: '2022-09-01',
      id: 5,
    },
    {
      name: 'Pancakes',
      ingredients: [
        {
          name: 'flour',
          amount: 1.5,
          amountType: 'cups',
        },
        {
          name: 'sugar',
          amount: 2,
          amountType: 'teaspoons',
        },
        {
          name: 'baking powder',
          amount: 1,
          amountType: 'teaspoon',
        },
        {
          name: 'salt',
          amount: 0.25,
          amountType: 'teaspoon',
        },
        {
          name: 'milk',
          amount: 1,
          amountType: 'cup',
        },
        {
          name: 'eggs',
          amount: 2,
          amountType: '',
        },
        {
          name: 'melted butter',
          amount: 2,
          amountType: 'tablespoons',
        },
        {
          name: 'vanilla extract',
          amount: 1,
          amountType: 'teaspoon',
        },
      ],
      instructions: [
        'In a large bowl, mix together flour, sugar, baking powder, and salt.',
        'In a separate bowl, mix together milk, eggs, melted butter, and vanilla extract.',
        'Add the wet ingredients to the dry ingredients and mix until just combined.',
        'Heat a frying pan over medium heat.',
        'Add a small amount of butter to the pan.',
        'Pour batter onto the pan to form 3-inch pancakes.',
        'Cook until bubbles form on the surface of the pancakes and the edges are dry, about 2 minutes per side.',
      ],
      image: '',
      tags: 'breakfast, pancakes, syrup',
      rating: 4.5,
      notes: '',
      source: "Grandpa's kitchen",
      date: '2022-06-01',
      id: 6,
    },
    {
      name: 'Lemon Chicken',
      ingredients: [
        {
          name: 'lemon juice',
          amount: 0.25,
          amountType: 'cup',
        },
        {
          name: 'lemon zest',
          amount: 1,
          amountType: 'tablespoon',
        },
        {
          name: 'garlic',
          amount: 1,
          amountType: 'teaspoon',
        },
        {
          name: 'olive oil',
          amount: 2,
          amountType: 'tablespoons',
        },
        {
          name: 'salt',
          amount: 0.5,
          amountType: 'teaspoon',
        },
        {
          name: 'pepper',
          amount: 0.25,
          amountType: 'teaspoon',
        },
        {
          name: 'chicken breasts',
          amount: 2,
          amountType: '',
        },
      ],
      instructions: [
        'In a large bowl, whisk together lemon juice, lemon zest, garlic, olive oil, salt, and pepper.',
        'Add chicken breasts and marinate for at least 30 minutes.',
        'Preheat oven to 400 degrees F.',
        'Place chicken breasts on a baking sheet and bake for 20-25 minutes, or until chicken is cooked through.',
      ],
      image: '',
      tags: 'chicken, lemon, main course',
      rating: 4.0,
      notes: '',
      source: "Friend's recipe",
      date: '2022-05-15',
      id: 7,
    },
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesComponent],
      imports: [HttpClientTestingModule, RecipeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpTestingController = TestBed.inject(HttpTestingController);
  }));

  it('should create a recipe s component', () => {
    expect(component).toBeTruthy();
  });

  it('should render recipe container', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#recipe-container')).toBeTruthy();
  });

  it('should display a list of recipes', () => {
    // Perform the data retrieval -- already happens in the component
    // component.ngOnInit();

    // Expect a single request to the specified URL
    const req = httpTestingController.expectOne('assets/recipes.json');

    // Respond with the mock data
    req.flush(mockData);

    // Verify that there are no outstanding requests
    httpTestingController.verify();

    // Assert that the data was properly loaded
    expect(component.recipes.length).toEqual(7);
  });
  it('should load data from the .json file', () => {
    const req = httpTestingController.expectOne('assets/recipes.json');
    req.flush(mockData);
    httpTestingController.verify();

    mockData.map((recipe, i) => {
      expect(recipe).toEqual(component.recipes[i]);
    });
  });
});
