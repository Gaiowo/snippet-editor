import { useState } from "react";

export function useDarkMode(): [boolean, () => void] {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches // true if dark mode is selected
  );

  const toggleDarkMode = (): void => setDarkMode(!darkMode);

  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return [darkMode, toggleDarkMode];
}
