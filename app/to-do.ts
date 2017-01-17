class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string) {}
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes Kevin', 'High'));
tasks.push(new Task('Pick up dog poop', 'Low'));
tasks.push(new Task('Take trash out', 'High'));
tasks.push(new Task('Game on h1z1', 'Highest'));
console.log(tasks)
