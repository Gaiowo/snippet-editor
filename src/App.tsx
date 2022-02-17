import { useDarkMode } from "./Organisms/content/darkMode";
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

export default App;
