import {Injectable} from '@angular/core';

@Injectable()
export class TodosService {
  todos = [];

  addTodo(todo) {
    console.log('Service:', todo);
    this.todos.push(todo);
  }

  getTodos() {
    return this.todos;
  }
}
