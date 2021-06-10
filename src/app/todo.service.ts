import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Todo[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<Todo[]>(url);
  }

  save(todo: Todo): Observable<Todo> {
    const url = `${this.baseUrl}`;
    return this.http.post<Todo>(url, todo);
  }
}
