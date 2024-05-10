"use client";

import useStateStore from "@/store/state";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  // change the theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Switch
      checked={theme === "dark"}
      onChange={toggleTheme}
      className="switch group scale-75"
    >
      <span
        aria-hidden="true"
        className="switch-knob group-data-[checked]:translate-x-7"
      />
    </Switch>
  );
}