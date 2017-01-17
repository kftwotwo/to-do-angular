import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{list}}</h3>
  `
})

export class AppComponent {
  list: string = 'list will be here soon';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
}
