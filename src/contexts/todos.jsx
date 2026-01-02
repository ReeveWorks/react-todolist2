import { create } from "zustand";

export const useTodos = create((set) => ({
  tasks: ["Sample Task 1", "Sample Task 2"],
  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  setTasks: (newTasks) => set({ tasks: newTasks}),
}))