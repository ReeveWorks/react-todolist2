import { create } from "zustand";

const useTodosStore = create((set) => ({
  tasks: ["Sample Task 1", "Sample Task 2"],
  addTodo: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  setTasks: (newTasks) => set({ tasks: newTasks}),
}));

export { useTodosStore };
