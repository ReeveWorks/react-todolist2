import { create } from "zustand";

// type TodoStore = {
//   tasks: string,
//   weight: number,
// };

const useTodosStore = create((set) => ({
  tasks: [
    {id: 1, task: "Learn Zustand", weight: 4},
    {id: 2, task: "Master JavaScript", weight: 7},
    {id: 3, task: "Build a App", weight: 6},
  ],
  addTodo: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  setTasks: (newTasks) => set({ tasks: newTasks}),
}));

export { useTodosStore };
