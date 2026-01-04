import { create } from "zustand";

// type TodoStore = {
//   tasks: string,
//   weight: number,
// };

const useTodosStore = create((set) => ({
  tasks: [
    {tasks: "Learn Zustand", weight: 10},
    {tasks: "Build a Todo App", weight: 38},
    {tasks: "Profit", weight: 15},
  ],
  addTodo: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  setTasks: (newTasks) => set({ tasks: newTasks}),
}));

export { useTodosStore };
