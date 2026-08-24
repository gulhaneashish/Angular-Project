import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';

export const selectTaskState =
  createFeatureSelector<TaskState>('tasks');

export const selectAllTasks =
  createSelector(
    selectTaskState,
    state => state.tasks
  );

export const selectCompletedTasks =
  createSelector(
    selectAllTasks,
    tasks => tasks.filter(task => task.completed)
  );

export const selectPendingTasks =
  createSelector(
    selectAllTasks,
    tasks => tasks.filter(task => !task.completed)
  );

export const selectTaskCount =
  createSelector(
    selectAllTasks,
    tasks => tasks.length
  );