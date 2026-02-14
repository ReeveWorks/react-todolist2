import { create } from "zustand";
import darkModeIcon from '../assets/dark_mode.svg';
import lightkModeIcon from '../assets/light_mode.svg';

const useModeStore = create((set) => ({
    mode: {
        state: true,
        img: darkModeIcon,
    },

    setMode: (toggle) => set((i) => ({ mode: {state: toggle, img: toggle ? darkModeIcon : lightkModeIcon} })),
}));

export { useModeStore };