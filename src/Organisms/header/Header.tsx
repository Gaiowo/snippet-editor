import { faGithub } from "@fortawesome/free-brands-svg-icons";
import DarkModeToggle from "../../Molecules/header/DarkModeToggle";
import Button from "../../Atoms/Button";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Header(props: HeaderProps): JSX.Element {
  return (
    <div className="flex items-center justify-between h-10 gap-2 px-2 border-b bg-slate-50 dark:bg-gray-900 dark:border-0">
      <span className="text-lg font-semibold leading-10 tracking-wide dark:text-slate-50">VSCode Snippet Editor</span>
      <a href="https://github.com/Gaiowo/snippet-editor" target="_blank" rel="noreferrer" className="ml-auto">
        <Button
          onClick={() => {}}
          title="GitHub"
          icon={faGithub}
          className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 dark:text-slate-50"
        />
      </a>
      <DarkModeToggle {...props} />
    </div>
  );
}

export default Header;
