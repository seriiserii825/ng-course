import { Component, signal } from '@angular/core';

interface ITask {
  id: number;
  title: string;
}

@Component({
  selector: 'app-create-task',
  imports: [],
  templateUrl: './create-task.html',
})
export class CreateTask {
  tasks = signal<ITask[]>([]);

  addTask(value: string) {
    const task_id = this.tasks().length + 1;
    this.tasks.update((tasks) => [...tasks, { id: task_id, title: value }]);
  }

  removeTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }
}
