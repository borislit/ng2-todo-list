import {Injectable} from '@angular/core';
import {TodoItem} from './todo-item';

@Injectable()
export class TodosService {
  todos: TodoItem[] = [];

  addTodo(todo: TodoItem) {
    this.todos.push(todo);
  }

  getTodos() {
    return this.todos;
  }

  completeItem(item: TodoItem) {
    item.complete = true;
  }
}
