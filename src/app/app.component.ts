import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  form: FormGroup = new FormGroup({
    description: new FormControl(''),
  });

  constructor(private service: TodoService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((todoList) => {
      this.todos = todoList;
    });
  }

  submit(): void {
    const todo: Todo = { ...this.form.value };
    this.service.save(todo).subscribe((savedTodo) => {
      this.todos.push(savedTodo);
      this.form.reset();
    });
  }
}
