import {Component} from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input type="text" #todoInput/>
    <button type="button" (click)="onAddClicked(todoInput.value)">Add</button>

  `
})
export class TodoInput {
  onAddClicked(val) {
    console.log(val);
  }
}
