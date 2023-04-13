import { create } from "zustand";
import { nanoid } from "nanoid";
import { IFilterState, ITodoState } from "./interfaces";
import { devtools } from "zustand/middleware";

export const useTodos = create<ITodoState>()(
  devtools((set) => ({
    todos: [
      { id: "1", title: "Learn JS", completed: true },
      { id: "2", title: "Learn React", completed: false },
    ],
    loading: false,
    error: null,
    addTodo: (title: string) =>
      set((state) => {
        const newTodo = { id: nanoid(), title, completed: false };

        return { todos: [...state.todos, newTodo] };
      }),

    toggleTodo: (todoId) =>
      set((state) => {
        const todos = state.todos.map((todo) =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
        );
        return { ...state, todos };
      }),
  })),
);

export const useFilter = create<IFilterState>()(
  devtools((set, get) => ({
    filter: "all",
    setFilter: (value) => set({ filter: value }),
  })),
);
