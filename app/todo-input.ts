import {Component} from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input type="text" #todoInput/>
    <button type="button" (contextmenu)="onAddClicked(todoInput.value, $event)">Add</button>

  `
})
export class TodoInput {
  onAddClicked(val, ev) {
    ev.preventDefault();
    console.log(val);
  }
}
