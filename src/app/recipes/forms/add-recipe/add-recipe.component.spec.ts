import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRecipeButtonComponent } from './add-recipe.component';
import { 
    MatDialog,
    MatDialogModule
  } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { RecipeModule } from '../../recipe.module';


describe('AddRecipeButtonComponent', () => {
  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;
  let component: AddRecipeButtonComponent;
  let fixture: ComponentFixture<AddRecipeButtonComponent>;
  
    beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipeButtonComponent ],
      imports: [ MatDialogModule, RecipeModule ],
      providers: [
        { provide: OverlayContainer, useFactory: () => {
          overlayContainerElement = document.createElement('div');
          return { getContainerElement: () => overlayContainerElement };
        }}
      ]
    });
    
    fixture = TestBed.createComponent(AddRecipeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dialog = TestBed.get(MatDialog);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
