import { ActionReducerMap } from '@ngrx/store';
import AppState from './model';

import { reducer as listTodoReducer } from './todo';

export const appReducer: ActionReducerMap<AppState> = {
  todo: listTodoReducer
};