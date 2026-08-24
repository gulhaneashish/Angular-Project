import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, tap, withLatestFrom } from 'rxjs';

import {
  addTask,
  deleteTask,
  toggleTask,
  loadTasks,
  loadTasksSuccess
} from './task.actions';

import { selectAllTasks } from './task.selectors';

@Injectable()
export class TaskEffects {

  private actions$ = inject(Actions);
  private store = inject(Store);

  // Save tasks whenever the task state changes
  saveTasks$ = createEffect(
    () =>
      this.actions$.pipe(

        ofType(
          addTask,
          deleteTask,
          toggleTask
        ),

        withLatestFrom(
          this.store.select(selectAllTasks)
        ),

        tap(([, tasks]) => {

          localStorage.setItem(
            'tasks',
            JSON.stringify(tasks)
          );

        })

      ),
    { dispatch: false }
  );

  // Load tasks from localStorage
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(

      ofType(loadTasks),

      map(() => {

        const storedTasks =
          localStorage.getItem('tasks');

        const tasks = storedTasks
          ? JSON.parse(storedTasks)
          : [];

        return loadTasksSuccess({ tasks });

      })

    )
  );
}