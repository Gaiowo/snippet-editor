import { isMobileOnly } from "react-device-detect";
import { useDarkMode } from "./Organisms/content/darkMode";
import Header from "./Organisms/header/Header";
import Content from "./Organisms/content/Content";

function App(): JSX.Element {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <>
      {isMobileOnly ? (
        <div className="flex flex-col w-screen h-screen overflow-hidden">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Content darkMode={darkMode} />
        </div>
      ) : (
        <div className="w-screen h-screen p-10 bg-gray-800">
          <p className="block text-center text-slate-50">Sorry. This application is only available on PC.</p>
        </div>
      )}
    </>
  );
}

export default App;
