import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allTasks">Show All</option>
    <option value="completedTasks">Show Done</option>
    <option value="incompleteTasks" selected="selected">Show Not Done</option>
  </select>
  <ul>
    <li (click)="isDone(currentTask)" *ngFor="let currentTask of childTaskList | completeness:filterByCompleteness">{{currentTask.description}} {{currentTask.priority}}
      <input *ngIf="currentTask.done === true" type="checkbox" checked (click)="toggleDone(currentTask, false)"/>
      <input *ngIf="currentTask.done === false" type="checkbox" (click)="toggleDone(currentTask, true)"/>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit!</button>
    </li>
  </ul>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
  this.clickSender.emit(taskToEdit);{}
  }
  filterByCompleteness: string = "incompleteTasks";
  masterTaskList: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 1)
  ];

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  toggleDone(clickedTask: Task, setCompleteness: boolean) {
     clickedTask.done = setCompleteness;
   }

  isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      alert("This task is done!");
    } else {
      alert("This task is not done. Better get to work!");
    }
  }

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
