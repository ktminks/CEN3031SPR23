import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:4201';
  public apiUrl = this.baseUrl + '/recipes';
  private fallbackDataPath = 'assets/recipes.json';

  constructor(private http: HttpClient) {}

  fetchRecipes(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError(() => {
        console.warn('API unavailable. Using local data instead.');
        return this.http.get(this.fallbackDataPath);
      })
    );
  }

  deleteRecipe(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  addRecipe(recipe: Recipe): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, recipe);
  }

  updateRecipe(recipe: Recipe): Observable<any> {
    const data = Object.entries(recipe).filter(entry => entry[1] !== undefined);
    const filteredData = Object.fromEntries(data);
    return this.http.put(`${this.apiUrl}/edit/${recipe.id}`, filteredData);
  }

  getRecipe(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
