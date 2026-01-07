import { create } from "zustand";

// type TodoStore = {
//   tasks: string,
//   weight: number,
// };

const useTodosStore = create((set) => ({
  tasks: [
    {id: 0, task: "Learn Zustand", weight: 10},
    {id: 1, task: "Build a Todo App", weight: 38},
    {id: 2, task: "Profit", weight: 15},
  ],
  addTodo: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  setTasks: (newTasks) => set({ tasks: newTasks}),
}));

export { useTodosStore };
