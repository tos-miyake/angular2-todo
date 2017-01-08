import {Injectable} from "@angular/core";
import {Todo} from "../models/todo.model";

const STORAGE_KEY = 'angular2-todo';

@Injectable()
export class TodoService {

  todos:Todo[] = [];

  constructor() {
    const persistedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    this.todos = persistedTodos.map(todo => {
      return new Todo(
        todo.id,
        todo.title,
        todo.siCompleted
      );
    });
  }

  add(title:string):void {
    let newTodo = new Todo(
      Math.floor(Math.random() * 100000),
      title,
      false
    );
    this.todos.push(newTodo);
    this.save();
  }

  remove(todo:Todo):void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.save();
  }

  toggleComplate(todo:Todo):void {
    this.todos.filter(t => t.id === todo.id)
      .map(t => t.isCompleted = !t.isCompleted);
    this.save();
  }

  getComplatedCount():number {
    return this.todos.filter(todo => todo.isCompleted).length;
  }

  private save():void {
    console.log('saveing : ', this.todos);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
  }
}
