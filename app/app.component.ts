import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{list}}</h3>
    <button (click)="newTask()">Add new Task</button>
    <div *ngIf="newTaskShow">
      <h6>Name</h6>
      <input [(ngModel)]="selectedTask.description" >
      <button (click)="closeNewTask()">Save</button>
    </div>
    <ul>
       <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}}  <button class="btn btn-warning" (click)="editTask(currentTask)">Edit!</button><br><br></li>
    </ul>
    <hr>
    <div *ngIf="selectedTask">
      <h3>{{selectedTask.description}}</h3>
      <p>Task Complete? {{selectedTask.done}}</p>
      <hr>
      <h3>Edit Task</h3>
      <label>Enter Task Description:</label>
      <input [(ngModel)]="selectedTask.description">
      <label>Enter Task Priority (1-3):</label><br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (High Priority)<br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority)<br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (low Priority)
      <button (click)="finishedEdit()">Done</button>
    </div>
  `
})

export class AppComponent {
  list: string = 'list ';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
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

  newTaskShow: boolean = false;

  newTask() {
    this.tasks.push(new Task('Enter here'));
    this.newTaskShow = true;
    this.selectedTask = this.tasks[this.tasks.length-1];
  }
  closeNewTask(){
    this.newTaskShow = false;
  }

  isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      alert("This task is done!");
    } else {
      alert("This task is not done. Better get to work!");
    }
  }


  priorityColor(currentTask){
  if (currentTask.priority === 1){
    return "bg-danger";
    } else if (currentTask.priority === 2) {
    return  "bg-warning";
    } else {
    return "bg-info";
    }
  }

  finishedEdit() {
    this.selectedTask = null;
  }

}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number){}
}
