import { create } from "zustand";

const useTodosStore = create((set) => ({
  tasks: [
    { id: 1, task: "Learn Zustand", weight: 4, status: false },
    { id: 2, task: "Master JavaScript", weight: 7, status: false },
    { id: 3, task: "Build a App", weight: 6, status: false },
    { id: 4, task: "Procrastinating", weight: 1, status: true },
  ],

  addTodo: (newTask) => set((state) => ({
    tasks: [...state.tasks, {
      id: state.tasks.length > 0 ? Math.max(...state.tasks.map(o => o.id)) + 1 : 1,
      task: newTask.task,
      weight: newTask.weight,
      status: false
    }],
  })),
  
  setTasks: (newTasks) => set({ tasks: newTasks }),

  deleteTask: (index) => set((state) => ({
    tasks: state.tasks.filter(t => t.id !== index)
  })),

  toggleStatus: (index) => set((state) => ({
    tasks: state.tasks.map(t => t.id === index ? {...t, status: !t.status} : t)
  })),
}));

export { useTodosStore };

// addTodo: (newTask) => set((state) => ({
//    tasks: [...state.tasks, {
//     id: Math.max(...state.tasks.map(o => o.id)) + 1,
//     task: newTask.task,
//     weight: newTask.weight,
//     status: false
//    }],
//   })),

// addTodo: (newTask) => push({tasks: {
//   id: Math.max(...state.tasks.map(o => o.id)) + 1,
//   task: newTask.task,
//   weight: newTask.weight,
//   status: false
//  },
// }),