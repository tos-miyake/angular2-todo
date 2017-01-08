import { Component } from '@angular/core';
import {Todo} from './models/todo.model';
import {TodoService} from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  todos: Todo[];
  constructor(private service: TodoService) {
    this.todos = this.service.todos;
  }
}
