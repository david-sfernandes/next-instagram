import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStateStore = create<StateStore>()(
  persist(
    (set, get) => ({
      open: false,
      setOpen: (isOpen: boolean) => set({ open: isOpen }),
    }),
    {
      name: "state-storage",
    }
  )
);

export default useStateStore;