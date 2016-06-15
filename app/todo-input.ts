import {Component} from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input type="text" #todoInput [(ngModel)]="defaultValue"/>
    <button type="button" (click)="onAddClicked()">Add</button>
    {{defaultValue}}
  `
})
export class TodoInput {
  defaultValue = 'Enter Value Here';

  onAddClicked() {
    console.log(this.defaultValue);
    this.defaultValue = this.defaultValue + 'foo';
  }
}
