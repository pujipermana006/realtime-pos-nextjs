import { create } from "zustand";

type TodoItem = {
  id: number;
  task: string;
};

type TodoStore = {
  //state
  todos: TodoItem[];

  //action
  addTodo: (task: string) => void;
};

export const UseTodoStore = create<TodoStore>((set) => ({
  //nilai awal
  todos: [],

  addTodo: (task) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), task }],
    })),
}));
