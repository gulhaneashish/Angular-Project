import { createReducer, on } from '@ngrx/store';
import { Task } from '../../task';
import { addTask, deleteTask, toggleTask,loadTasksSuccess } from './task.actions';

export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: []
};

export const taskReducer = createReducer(
  initialState,

  on(addTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task]
  })),

  on(deleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id)
  })),

  on(toggleTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  })),
  on(loadTasksSuccess, (state, { tasks }) => ({
  ...state,
  tasks
}))
);