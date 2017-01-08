import {Injectable} from "@angular/core";
import {Todo} from "../models/todo.model";

const STORAGE_KEY = 'angular2-todo';

@Injectable()
export class TodoService {

  todos:Todo[] = [];

  constructor() {}

  add(title:string):void {
    let newTodo = new Todo(
      Math.floor(Math.random() * 100000),
      title,
      false
    );
    this.todos.push(newTodo);
    this.save();
  }

  remove():void {}
  toggleComplate():void {}

  private save():void {
    console.log('saveing : ', this.todos);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
  }
}
