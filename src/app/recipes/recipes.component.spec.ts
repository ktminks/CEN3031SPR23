import { RecipeModule } from './recipe.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipesComponent } from './recipes.component';
import { RecipeDataService } from 'src/app/services/recipe-data.service';
import { ApiService } from 'src/app/services/api.service';
import { DataValidationService } from 'src/app/services/data-validation.service';

describe('RecipesComponent', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RecipeModule],
      declarations: [RecipesComponent],
      providers: [RecipeDataService, ApiService, DataValidationService],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with recipes from RecipeDataService', async () => {
    const recipeDataService = TestBed.inject(RecipeDataService);
    spyOn(recipeDataService, 'loadRecipes').and.callThrough();

    fixture.detectChanges();
    console.log('after fixture.detectChanges()');
    expect(recipeDataService.loadRecipes).toHaveBeenCalled();
  });
});