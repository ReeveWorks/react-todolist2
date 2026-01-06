import { create } from "zustand";

// type TodoStore = {
//   tasks: string,
//   weight: number,
// };

const useTodosStore = create((set) => ({
  tasks: [
    {task: "Learn Zustand", weight: 10},
    {task: "Build a Todo App", weight: 38},
    {task: "Profit", weight: 15},
  ],
  addTodo: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  setTasks: (newTasks) => set({ tasks: newTasks}),
}));

export { useTodosStore };
