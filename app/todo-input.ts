import {Component, EventEmitter, Output} from '@angular/core';
import {TodosService} from './todos-service';
import {TodoItem} from './todo-item';

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

  constructor(private todosService: TodosService) {

  }

  onAddClicked() {
    console.log(this.defaultValue);
    this.onAdd.emit(this.defaultValue);
    this.todosService.addTodo(new TodoItem(this.defaultValue, false));
  }
}


