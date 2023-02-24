import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditRecipeButtonComponent } from './edit-recipe.component';
import { 
    MatDialog,
    MatDialogModule
  } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { RecipeModule } from '../../recipe.module';


describe('EditRecipeButtonComponent', () => {
  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;
  let component: EditRecipeButtonComponent;
  let fixture: ComponentFixture<EditRecipeButtonComponent>;
  
    beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecipeButtonComponent ],
      imports: [ MatDialogModule, RecipeModule ],
      providers: [
        { provide: OverlayContainer, useFactory: () => {
          overlayContainerElement = document.createElement('div');
          return { getContainerElement: () => overlayContainerElement };
        }}
      ]
    });
    
    fixture = TestBed.createComponent(EditRecipeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dialog = TestBed.get(MatDialog);
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
