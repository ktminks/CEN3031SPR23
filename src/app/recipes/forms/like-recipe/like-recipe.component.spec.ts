import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeRecipeComponent } from './like-recipe.component';

describe('LikeRecipeComponent', () => {
  let component: LikeRecipeComponent;
  let fixture: ComponentFixture<LikeRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
