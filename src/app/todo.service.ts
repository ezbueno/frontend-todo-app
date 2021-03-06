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

  delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  markAsDone(id: number): Observable<Todo> {
    const url = `${this.baseUrl}/${id}/done`;
    return this.http.patch<Todo>(url, {});
  }
}
