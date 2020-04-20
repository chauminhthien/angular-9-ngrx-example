export interface TodoItemState {
  id: number;
  name: string;
  level: number
}
export interface TodoState {
  data: TodoItemState[];
}