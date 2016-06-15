import {Component, Input} from '@angular/core';
import {TodosService} from './todos-service';

@Component({
  selector: 'todos-list',
  template: `
    <div>Todos:</div>
    <div *ngFor="let todo of getTodos()">{{todo.value}}</div>
  `
})
export class TodosList {
  @Input() todos;

  constructor(private todosService: TodosService) {

  }

  getTodos() {
    return this.todosService.todos;
  }
}
