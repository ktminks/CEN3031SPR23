import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipeCardComponent } from './recipe-card.component';
import { InMemoryDataService } from 'src/app/core/services/in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

describe('RecipeCardComponent', () => {
  let component: RecipeCardComponent;
  let fixture: ComponentFixture<RecipeCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
      ],
      declarations: [RecipeCardComponent],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(RecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render recipe container', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#recipe-container')).toBeTruthy();
  });

  it('should display a list of recipes', () => {
    expect(component.recipes.length).toBe(7);
  });
});
