import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStateStore = create<StateStore>()(
  persist(
    (set, _) => ({
      open: false,
      isLightTheme: true,
      setLightTheme: (isLightTheme: boolean) => set({ isLightTheme: isLightTheme }),
      setOpen: (isOpen: boolean) => set({ open: isOpen }),
    }),
    {
      name: "state-storage",
    }
  )
);

export default useStateStore;