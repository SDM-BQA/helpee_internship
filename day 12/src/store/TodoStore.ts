import { create } from "zustand";

const todoStore = (set, get) => ({
  todos: JSON.parse(localStorage.getItem("todos")) || [],

  filterType: "all",
  addTask: (task) => {
    const newTask = {
      ...task,
      status: "active",
      time: new Date().toLocaleString(),
    };

    const updatedTodos = [...get().todos, newTask];

    set({ todos: updatedTodos });

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  },

  taskStatus: (id) => {
    const todos = get().todos;
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id && todo.status === "active") {
        return {
          ...todo,
          status: "completed",
        };
      } else if (todo.id === id && todo.status === "completed") {
        return {
          ...todo,
          status: "active",
        };
      } else {
        return todo;
      }
    });
    set((state) => ({
      todos: updatedTodos,
    }));
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  },

  deleteTask: (id) => {
    const todos = get().todos;
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    set((state) => ({
      todos: updatedTodos,
    }));
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  },
  setFilterType: (type) => {
    set({ filterType: type });
  },
});

const useTodoStore = create(todoStore);

export default useTodoStore;
