import { TestBed } from '@angular/core/testing';
import { DataValidationService } from './data-validation.service';

describe('DataValidationService', () => {
  let service: DataValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate and convert recipe data', () => {
    const input = [
      {
        name: 'Test Recipe',
        ingredients: ['1 cup sugar', '2 tbsp salt'],
        instructions: ['Mix ingredients'],
        image: 'test-image.jpg',
        tags: 'test, recipe',
        rating: 4,
        notes: 'Test notes',
        source: 'Test source',
        date: '2022-11-20',
        id: 1,
      },
    ];

    const expectedOutput = [
      {
        ...input[0],
        ingredients: [
          { name: 'sugar', amount: 1, amountType: 'cup' },
          { name: 'salt', amount: 2, amountType: 'tbsp' },
        ],
        date: new Date(input[0].date).toISOString(),
      },
    ];

    const result = service.validateRecipeData(input);
    expect(result).toEqual(expectedOutput);
  });
});
