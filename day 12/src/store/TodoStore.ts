import { create } from "zustand";

interface Tasks {
  id: string,
  name:string,
  description:string,
  tag:string,
  priority:{
    name:string,
    value:string,
    priorityNum:number
  },
  time:string,
  status:string
}

const todoStore = (set, get) => ({
  todos: JSON.parse(localStorage.getItem("todos")) || [],

  filterType: "all",
  addTask: (task:Tasks) => {
    const newTask = {
      ...task,
      status: "active",
      time: new Date().toLocaleString(),
    };

    const updatedTodos = [...get().todos, newTask];

    set({ todos: updatedTodos });

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  },

  taskStatus: (id:string) => {
    const todos = get().todos;
    const updatedTodos = todos.map((todo:Tasks) => {
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

  deleteTask: (id:string) => {
    const todos = get().todos;
    const updatedTodos = todos.filter((todo:Tasks) => todo.id !== id);

    set((state) => ({
      todos: updatedTodos,
    }));
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  },
  setFilterType: (type:string) => {
    set({ filterType: type });
  },
});

const useTodoStore = create(todoStore);

export default useTodoStore;
