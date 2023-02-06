import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HelloWorldService {
  constructor(private http: HttpClient) {}

  getTitle() {
    return this.http
      .get(`${environment.serverUrl}/hello-world`)
      .pipe(map((response) => JSON.parse(response.toString())));
  }
}

// getPosts(){
// this.http.get('http://jsonplaceholder.typicode.com/posts')
// .pipe(map(res => res.json()));
// }
// }
