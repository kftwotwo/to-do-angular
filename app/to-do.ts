class Task {
  done: boolean;
  description: string;
  priority: string;

  constructor(descriptionParameter: string, priorityParameter: string) {
    this.done = false;
    this.description = descriptionParameter;
    this.priority = priorityParameter;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes Kevin', 'High'));
console.log(tasks)
