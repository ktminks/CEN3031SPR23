import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { IngredientFormComponent } from './ingredient-form.component';
import { 
    MatDialog,
    MatDialogModule
  } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { RecipeModule } from '../../recipe.module';


describe('IngredientFormComponent', () => {
  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;
  let component: IngredientFormComponent;
  let fixture: ComponentFixture<IngredientFormComponent>;
  
    beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientFormComponent ],
      imports: [ MatDialogModule, RecipeModule ],
      providers: [
        { provide: OverlayContainer, useFactory: () => {
          overlayContainerElement = document.createElement('div');
          return { getContainerElement: () => overlayContainerElement };
        }}
      ]
    });
    
    fixture = TestBed.createComponent(IngredientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dialog = TestBed.get(MatDialog);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
