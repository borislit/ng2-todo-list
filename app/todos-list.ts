import {Component, Input} from '@angular/core';

@Component({
  selector: 'todos-list',
  template: `
    <div>Todos:</div>
    <div *ngFor="let todo of todos">{{todo}}</div>
  `
})
export class TodosList {
  @Input() todos;
}
