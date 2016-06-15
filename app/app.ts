import {Component} from '@angular/core';
import {TodoInput} from './todo-input';
import {TodosList} from './todos-list';

@Component({
  selector: 'my-app',
  directives: [TodoInput, TodosList],
  template: `
    <todo-input (onAdd)="todoAdded($event)"></todo-input>
    <todos-list [todos]="todos"></todos-list>
  `,
})
export class AppComponent {
  todos = [];

  todoAdded(val) {
    this.todos.push(val);
  }
}
