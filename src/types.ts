export interface ITodo {
  title: string;
  id: number;
  completed: boolean;
}
export interface ITodoActions {
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}
