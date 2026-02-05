import { create } from "zustand";
import { useState } from 'react';

const usePageStore = create((set) => ({
    page: {
        selected: "Redux",
    },

    selectPage: (pageSelected) => set({ page: {selected: pageSelected} }),
        
    setTasks: (newTasks) => set({ tasks: newTasks }),
}));

export { usePageStore };