import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeCardComponent } from './recipe-card.component';
import { RecipeModule } from '../recipe.module';

describe('RecipeCardComponent', () => {
  let component: RecipeCardComponent;
  let fixture: ComponentFixture<RecipeCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeCardComponent],
      imports: [RecipeModule],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(RecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create a recipe card component', () => {
    expect(component).toBeTruthy();
  });
});
