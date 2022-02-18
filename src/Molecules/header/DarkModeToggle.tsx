import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Atoms/Button";

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function DarkModeToggle(props: DarkModeToggleProps): JSX.Element {
  return (
    <Button
      icon={props.darkMode ? faSun : faMoon}
      onClick={props.toggleDarkMode}
      className="w-8 ml-auto mr-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 dark:text-slate-50"
    />
  );
}

export default DarkModeToggle;
