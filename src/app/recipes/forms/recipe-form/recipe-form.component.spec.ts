import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { OpenFormButtonComponent } from './recipe-form.component';
import { 
    MatDialog,
    MatDialogModule
  } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { RecipeModule } from '../../recipe.module';


describe('OpenFormButtonComponent', () => {
  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;
  let component: OpenFormButtonComponent;
  let fixture: ComponentFixture<OpenFormButtonComponent>;
  
    beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenFormButtonComponent ],
      imports: [ MatDialogModule, RecipeModule ],
      providers: [
        { provide: OverlayContainer, useFactory: () => {
          overlayContainerElement = document.createElement('div');
          return { getContainerElement: () => overlayContainerElement };
        }}
      ]
    });
    
    fixture = TestBed.createComponent(OpenFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dialog = TestBed.get(MatDialog);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
