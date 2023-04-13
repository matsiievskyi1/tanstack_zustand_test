export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface ITodoState {
  todos: ITodo[];
  loading: boolean;
  error: null;
  addTodo: (title: string) => void;
  toggleTodo: (todoId: string) => void;
}

export interface IFilterState {
  filter: string;
  setFilter: (value: string) => void;
}
