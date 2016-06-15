import {Component} from '@angular/core';
import {TodoInput} from './todo-input';

@Component({
  selector: 'my-app',
  directives: [TodoInput],
  template: `<todo-input (onAdd)="todoAdded($event)"></todo-input>`,
})
export class AppComponent {
  todoAdded(val) {
    console.log('Parent:', val);
  }
}
