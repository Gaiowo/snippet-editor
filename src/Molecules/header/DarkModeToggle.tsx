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
      className="w-8 ml-auto mr-1.5 bg-gray-400 hover:bg-gray-500 text-slate-50"
    />
  );
}

export default DarkModeToggle;
