import { Action } from '@ngrx/store';
import { TodoItemState } from './model';
import { TodoType } from './types'

export class TodoAdd implements Action {
    public readonly type = TodoType.TODO_ADD;
    constructor(public payload: TodoItemState ) { }
}

export type TodoActionType = TodoAdd

