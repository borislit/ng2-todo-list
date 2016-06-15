import {Component} from '@angular/core';
import {TodoInput} from './todo-input';
import {TodosList} from './todos-list';

@Component({
  selector: 'my-app',
  directives: [TodoInput, TodosList],
  template: `
    <todo-input></todo-input>
    <todos-list></todos-list>
  `,
})
export class AppComponent {

}
