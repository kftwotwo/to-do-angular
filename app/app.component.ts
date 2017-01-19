import { Component, Input } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{list}}</h3>
    <new-task (newTaskSender)="addTask($event)"></new-task>
    <task-list [childTaskList]="masterTaskList" (clickSender)="editTask($event)"></task-list>
    <hr>
    <edit-task [childSelectedTask]="selectedTask" (doneButtonClickedSender)="finishedEdit()"></edit-task>
  `
})

export class AppComponent {
  list: string = 'list ';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  masterTaskList: Task[] = [
    new Task('add readme content', 1),
    new Task('wash the car', 3),
    new Task('mow the lawn', 2),
    new Task('clean house', 1)
  ];

  selectedTask = null;
  // selectedTask: Task = this.tasks[0];

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEdit() {
    this.selectedTask = null;
  }

  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }

}
