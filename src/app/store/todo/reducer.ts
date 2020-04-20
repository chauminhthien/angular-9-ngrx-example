import { TodoActionType } from './action';
import { TodoState, TodoItemState } from './model';
import { TodoType } from './types'

const initLoginState: TodoItemState = {
    id: +(new Date),
    name: `Ok.bây giờ để Reducer hoạt động chúng ta cần "Register" Reducer với Store`,
    level: 0
};

const initUserState: TodoState = {
    data: [initLoginState]
};

export default function reducer(state = initUserState, action: TodoActionType): TodoState {
  switch (action.type) {
    case TodoType.TODO_ADD:
      return {
        ...state,
        data: [ ...state.data, action.payload]
      }
    default:
      return state;
  }
}