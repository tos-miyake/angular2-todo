import {Component,Input} from '@angular/core';
import {Todo} from "../../models/todo.model";
import {TodoService} from "../../services/todo.service"

@Component({
    selector: 'todo-content',
    templateUrl: './content.html',
    styleUrls: ['./content.css']
})
export class TodoContentComponent {
    @Input()
    todos: Todo[];

    constructor(private service:TodoService) {}

    toggleComplate(todo:Todo) {
        this.service.toggleComplate(todo);
    }

    deleteTodo(todo:Todo) {
        this.service.remove(todo);
    }
}