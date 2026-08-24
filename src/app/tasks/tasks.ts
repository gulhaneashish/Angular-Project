import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf, } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  addTask,
  toggleTask,
  deleteTask,
   loadTasks
} from '../store/tasks/task.actions';
import {
  selectAllTasks,
  selectCompletedTasks,
  selectPendingTasks,
  selectTaskCount
} from '../store/tasks/task.selectors';

@Component({
  selector: 'app-tasks',
  imports: [
    AsyncPipe,
    NgFor,
    NgIf,
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

  private store = inject(Store);

  tasks$ = this.store.select(selectAllTasks);

  completedTasks$ = this.store.select(selectCompletedTasks);

  pendingTasks$ = this.store.select(selectPendingTasks);

  taskCount$ = this.store.select(selectTaskCount);
taskInput: any;

  addNewTask(title: string) {
  if (!title.trim()) {
    return;
  }

  const task = {
    id: Date.now(),
    title: title.trim(),
    completed: false
  };

  this.store.dispatch(
    addTask({ task })
  );
}

toggleTaskStatus(id: number) {
  this.store.dispatch(
    toggleTask({ id })
  );
}

deleteTaskById(id: number) {
  this.store.dispatch(
    deleteTask({ id })
  );
}
ngOnInit() {
  this.store.dispatch(loadTasks());
}
}