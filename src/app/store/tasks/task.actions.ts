import { createAction, props } from '@ngrx/store';
import { Task } from '../../task';

export const addTask = createAction(
  '[Tasks] Add Task',
  props<{ task: Task }>()
);

export const deleteTask = createAction(
  '[Tasks] Delete Task',
  props<{ id: number }>()
);

export const toggleTask = createAction(
  '[Tasks] Toggle Task',
  props<{ id: number }>()
);

export const loadTasks = createAction(
  '[Tasks] Load Tasks'
);

export const loadTasksSuccess = createAction(
  '[Tasks] Load Tasks Success',
  props<{ tasks: Task[] }>()
);