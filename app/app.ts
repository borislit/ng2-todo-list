import {Component} from '@angular/core';
import {TodoInput} from './todo-input';

@Component({
  selector: 'my-app',
  directives: [TodoInput],
  template: `
    <todo-input (onAdd)="todoAdded($event)"></todo-input>
    <div *ngFor="let todo of todos">{{todo}}</div>
  `,
})
export class AppComponent {
  todos = [];

  todoAdded(val) {
    this.todos.push(val);
  }
}
