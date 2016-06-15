import {Component} from '@angular/core';
import {TodoInput} from './todo-input';

@Component({
  selector: 'my-app',
  directives: [TodoInput],
  template: `<todo-input></todo-input>`,
})
export class AppComponent {
}
