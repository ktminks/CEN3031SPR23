import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipeDataService } from './recipe-data.service';
import { ApiService } from './api.service';
import { DataValidationService } from './data-validation.service';

describe('RecipeDataService', () => {
  let service: RecipeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService, DataValidationService],
    });
    service = TestBed.inject(RecipeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
