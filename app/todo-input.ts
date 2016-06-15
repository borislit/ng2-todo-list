import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input type="text" #todoInput [(ngModel)]="defaultValue"/>
    <button type="button" (click)="onAddClicked()">Add</button>
  `
})
export class TodoInput {
  @Output() onAdd = new EventEmitter();
  defaultValue = 'Enter Value Here';

  onAddClicked() {
    console.log(this.defaultValue);
    this.onAdd.emit(this.defaultValue);
  }
}


