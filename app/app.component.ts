import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{list}}</h3>
    <ul>
       <li *ngFor="let currentTask of tasks">{{currentTask.description}}  <button class="btn btn-warning" (click)="editTask()">Edit!</button><br><br></li>
    </ul>
  `
})

export class AppComponent {
  list: string = 'list ';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('add readme content'),
    new Task('wash the car'),
    new Task('mow the lawn'),
    new Task('clean house')
  ];

  editTask() {
    alert("You just requested to edit a Task!");
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string){}
}
