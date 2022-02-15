import { useState } from "react";
import Header from "./Organisms/header/Header";
import Content from "./Organisms/content/Content";

function App(): JSX.Element {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="flex flex-col w-screen h-screen">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Content darkMode={darkMode} />
    </div>
  );
}

function useDarkMode(): [boolean, () => void] {
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

export default App;
