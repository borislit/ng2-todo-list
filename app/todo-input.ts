import {Component} from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input type="text" #todoInput [value]="defaultValue" (input)="defaultValue = todoInput.value"/>
    <button type="button" (click)="onAddClicked(todoInput.value)">Add</button>
    {{defaultValue}}
  `
})
export class TodoInput {
  defaultValue = 'Enter Value Here';

  onAddClicked() {
    console.log(this.defaultValue);
  }
}
